import { writeFile } from "fs";
import path from "path";
import { generateNextLang } from "./snippets/lang";
import { generateNextComponents } from "./snippets/react";
import { fileName, fileNameCapitalized, first, second, third } from "./utils/placeholders";
import {
  fileNameCapitalizedReplace,
  fileNameCapitalizedReplaceMd,
  fileNameReplaceMd,
  firstReplace,
  firstReplaceMd,
  secondReplace,
  secondReplaceMd,
  thirdReplace,
  thirdReplaceMd,
} from "./utils/replace";
import { changeLang, isTs, tsImport, tsSpace } from "./utils/typescript";

interface PrefixToName {
  [key: string]: string;
}

export interface Snippet {
  prefix: string;
  body: (string | null)[];
}

const prefixToName: PrefixToName = {
  np: "nextPage",
  npssp: "nextPageServerSideProps",
  npsp: "nextPageStaticProps",
  npspth: "nextPageStaticPaths",
  nssp: "nextServerSideProps",
  nsp: "nextStaticProps",
  nspth: "nextStaticPaths",
  nip: "nextInitialProps",
  napi: "nextApi",
  nmid: "nextMiddleware",
  nimg: "nextImage",
  napp: "nextApp",
  ndoc: "nextDocument",
};

export function generateSnippets(withMarkdown: boolean = false) {
  changeLang("js");
  console.time("gen");
  const nextSnippetsJs = generateNextComponents();
  const langSnippetsJs = generateNextLang();
  changeLang("ts");
  const nextSnippetsTs = generateNextComponents();
  const langSnippetsTs = generateNextLang();

  saveSnippets(langSnippetsTs, "ts");
  saveSnippets(langSnippetsJs, "js");
  saveSnippets(nextSnippetsTs, "tsx");
  saveSnippets(nextSnippetsJs, "jsx");
  console.timeEnd("gen");

  if (withMarkdown) {
    saveMarkdown([...nextSnippetsJs, ...langSnippetsJs], "js");
    saveMarkdown([...nextSnippetsTs, ...langSnippetsTs], "ts");
  }
}

function saveMarkdown(data: Snippet[], type: "js" | "ts") {
  const typeToName = {
    js: "javascript",
    ts: "typescript",
  };

  for (const snippet of data) {
    snippet.body = snippet.body.filter((line) => line !== null);
  }

  const snippets: { [key: string]: any } = {};

  for (const snippet of data) {
    snippets[prefixToName[snippet.prefix]] = snippet;
  }
  const snippetString = JSON.stringify(snippets, null, 2)
    .replace(new RegExp(fileName, "g"), fileNameReplaceMd)
    .replace(new RegExp(first, "g"), firstReplaceMd)
    .replace(new RegExp(second, "g"), secondReplaceMd)
    .replace(new RegExp(third, "g"), thirdReplaceMd)
    .replace(new RegExp(fileNameCapitalized, "g"), fileNameCapitalizedReplaceMd);

  const snippetParsed = JSON.parse(snippetString) as {
    [key: string]: { prefix: string; body: string[] };
  };

  console.log(snippetParsed);

  let md = `# ${typeToName[type][0].toUpperCase()}${typeToName[type].slice(1)} snippets\n\n`;

  for (const snippet in snippetParsed) {
    if (Object.prototype.hasOwnProperty.call(snippetParsed, snippet)) {
      const element = snippetParsed[snippet];
      console.log({ snippet, element });

      const example = [`- \`${element.prefix}\` - ${snippet}\n`];

      md = md.concat(example.join("\n"));
    }
  }

  for (const snippet in snippetParsed) {
    if (Object.prototype.hasOwnProperty.call(snippetParsed, snippet)) {
      const element = snippetParsed[snippet];
      console.log({ snippet, element });

      const example = [
        "",
        `## \`${element.prefix}\` - ${snippet}`,
        "",
        "```" + typeToName[type],
        ...element.body,
        "```",
        "",
      ];

      md = md.concat(example.join("\n"));
    }
  }

  writeFile(`./docs/${typeToName[type]}-snippets.md`, md, () => {
    console.log("Saved");
  });
}

function saveSnippets(data: Snippet[], type: "tsx" | "jsx" | "ts" | "js" | "md") {
  // remove null from body
  for (const snippet of data) {
    snippet.body = snippet.body.filter((line) => line !== null);
  }

  const snippets: { [key: string]: any } = {};

  for (const snippet of data) {
    snippets[prefixToName[snippet.prefix]] = snippet;
  }

  const snippetString = JSON.stringify(snippets, null, 2)
    .replace(new RegExp(first, "g"), firstReplace)
    .replace(new RegExp(second, "g"), secondReplace)
    .replace(new RegExp(third, "g"), thirdReplace)
    .replace(new RegExp(fileNameCapitalized, "g"), fileNameCapitalizedReplace);

  if (type === "js" || type === "ts") {
    if (type === "js") {
      writeFile(__dirname + "/generated/javascript.json", snippetString, () => {
        console.log("Saved");
      });
    } else if (type === "ts") {
      writeFile(__dirname + "/generated/typescript.json", snippetString, () => {
        console.log("Saved");
      });
    }
  }

  if (type === "jsx" || type === "tsx") {
    if (type === "jsx") {
      writeFile(__dirname + "/generated/javascriptreact.json", snippetString, () => {
        console.log("Saved");
      });
    } else if (type === "tsx") {
      writeFile(__dirname + "/generated/typescriptreact.json", snippetString, () => {
        console.log("Saved");
      });
    }
  }
}

generateSnippets(true);
