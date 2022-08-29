import fs from "fs";

interface Snippet {
  [key: string]: {
    prefix: string[];
    body: string[];
  };
}

const envToType = {
  js: {
    name: "javascript",
    prefix: "js",
    lang: "jsx",
  },
  ts: {
    name: "typescript",
    prefix: "ts",
    lang: "tsx",
  },
};

const getEnv = () => envToType[process.env.LANG as "js" | "ts"];

let snippets: Snippet = {};

interface Generate {
  name: string;
  prefixes: string[];
  title: string;
}

console.log(process.env.LANG);

export const snippet = ({ name, prefixes, title }: Generate) => {
  const generate = (
    all: TemplateStringsArray,
    ...rest: string[] | (string | null)[]
  ) => {
    let l = 0;
    let r = 0;

    let combined = "";
    while (all[l] || rest[r]) {
      if (l > r) {
        if (rest[r] !== null) {
          combined = combined.concat(rest[r]!);
        }
        r += 1;
      } else {
        combined = combined.concat(all[l]);
        l += 1;
      }
    }

    // remove first \n and last \n
    combined = combined.slice(1, -1);

    // remove new lines on top of snippet
    while (combined[0] === "\n") {
      combined = combined.slice(1);
    }

    snippets[name] = {
      prefix: prefixes,
      body: combined.split("\n"),
    };

    console.log({
      all,
      rest,
      combined,
    });
  };
  return generate;
};

import "./snippets";

fs.writeFile(
  `snippets/${getEnv().name}.code-snippets`,
  JSON.stringify(snippets, null, 2),
  () => {
    console.log("Generated snippets for", getEnv().name);
  }
);
