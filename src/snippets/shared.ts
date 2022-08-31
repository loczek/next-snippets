import { fileNameCapitalized, first } from "../utils/placeholders";
import { tsString } from "../utils/typescript";

export const interfaceProps = "interface Props {}";
export const importNext = "import { NextPage } from 'next'";
export const exportDefault = `export default ${fileNameCapitalized}`;
export const importNextAndGetServerSideProps = () =>
  `import { NextPage${tsString(", GetServerSideProps")} } from 'next'`;
export const importNextAndGetStaticProps = () => `import { NextPage${tsString(", GetStaticProps")} } from 'next'`;
export const importNextAndGetStaticPaths = () => `import { NextPage${tsString(", GetStaticPaths")} } from 'next'`;

export const getServerSideProps = () => [
  `export const getServerSideProps${tsString(": GetServerSideProps")} = async (ctx) => {`,
  "  return {",
  "    props: {}",
  "  }",
  "}",
];
export const getStaticProps = () => [
  `export const getStaticProps${tsString(": GetStaticProps")} = async (ctx) => {`,
  "  return {",
  "    props: {},",
  "  }",
  "}",
];
export const getStaticPaths = () => [
  `export const getStaticPaths${tsString(": GetStaticPaths")} = async () => {`,
  "  return {",
  "    paths: [],",
  "    fallback: false,",
  "  }",
  "}",
];
