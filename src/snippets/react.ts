import { Snippet } from "../gen";
import { fileName, fileNameCapitalized, first, second } from "../utils/placeholders";
import { tsImport, tsSpace, tsString, tsType } from "../utils/typescript";
import {
  exportDefault,
  getServerSideProps,
  getStaticPaths,
  getStaticProps,
  importNext,
  importNextAndGetServerSideProps,
  importNextAndGetStaticPaths,
  importNextAndGetStaticProps,
  interfaceProps,
} from "./shared";

export const generateNextComponents = () => {
  const NextPage: Snippet = {
    prefix: "np",
    body: [
      tsImport(importNext),
      tsSpace(),
      tsImport(interfaceProps),
      tsSpace(),
      `const ${fileNameCapitalized}${tsType("NextPage<Props>")} = ({}) => {`,
      `  return <div>${second}</div>`,
      "}",
      "",
      exportDefault,
    ],
  };

  const NextPageServerSideProps: Snippet = {
    prefix: "npssp",
    body: [
      tsImport(importNextAndGetServerSideProps()),
      tsSpace(),
      tsImport(interfaceProps),
      tsSpace(),
      `const ${fileNameCapitalized}${tsType("NextPage<Props>")} = ({}) => {`,
      `  return <div>${second}</div>`,
      "}",
      "",
      ...getServerSideProps(),
      "",
      exportDefault,
    ],
  };

  const NextPageStaticProps: Snippet = {
    prefix: "npsp",
    body: [
      tsImport(importNextAndGetStaticProps()),
      tsSpace(),
      tsImport(interfaceProps),
      tsSpace(),
      `const ${fileNameCapitalized}${tsType("NextPage<Props>")} = ({}) => {`,
      `  return <div>${second}</div>`,
      "}",
      "",
      ...getStaticProps(),
      "",
      exportDefault,
    ],
  };

  const NextPageStaticPaths: Snippet = {
    prefix: "npspth",
    body: [
      tsImport(importNextAndGetStaticPaths()),
      tsSpace(),
      tsImport(interfaceProps),
      tsSpace(),
      `const ${fileNameCapitalized}${tsType("NextPage<Props>")} = ({}) => {`,
      `  return <div>${second}</div>`,

      "}",
      "",
      ...getStaticPaths(),
      "",
      exportDefault,
    ],
  };

  const NextServerSideProps: Snippet = {
    prefix: "nssp",
    body: [...getServerSideProps()],
  };

  const NextStaticProps: Snippet = {
    prefix: "nsp",
    body: [...getStaticProps()],
  };

  const NextStaticPaths: Snippet = {
    prefix: "nspth",
    body: [...getStaticPaths()],
  };

  const NextInitialProps: Snippet = {
    prefix: "nip",
    body: [`${fileNameCapitalized}.getInitialProps = async (ctx) => {`, "  return {", `    ${second}`, "  }", "}"],
  };

  const NextImage: Snippet = {
    prefix: "nimg",
    body: [`<Image src="${first}" alt="${second}" />`],
  };

  const NextApp: Snippet = {
    prefix: "napp",
    body: [
      tsImport("import type { AppProps } from 'next/app'"),
      tsSpace(),
      `export default function MyApp({ Component, pageProps }${tsType("AppProps")}) {`,
      "  return <Component {...pageProps} />",
      "}",
    ],
  };

  const NextDocument: Snippet = {
    prefix: "ndoc",
    body: [
      `import Document, { Html, Head, Main, NextScript${tsString(", DocumentContext")} } from 'next/document'`,
      "",
      "class MyDocument extends Document {",
      `  static async getInitialProps(ctx${tsType("DocumentContext")}) {`,
      "    const initialProps = await Document.getInitialProps(ctx)",
      "    return { ...initialProps }",
      "  }",
      "",
      "  render() {",
      "    return (",
      "      <Html>",
      "        <Head />",
      "        <body>",
      "          <Main />",
      "          <NextScript />",
      "        </body>",
      "      </Html>",
      "    );",
      "  }",
      "}",
      "",
      "export default MyDocument",
    ],
  };

  return [
    NextPage,
    NextPageServerSideProps,
    NextPageStaticProps,
    NextPageStaticPaths,
    NextServerSideProps,
    NextStaticProps,
    NextStaticPaths,
    NextInitialProps,
    NextImage,
    NextApp,
    NextDocument,
  ];
};
