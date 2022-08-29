import { snippet } from ".";
import { t, tm } from "./utils";
import { FileNameCapitalized } from "./utils/snippets";

snippet({
  name: "nextPage",
  prefixes: ["np"],
  title: "Next Page",
})`
${tm`import { NextPage } from 'next'

interface Props {}
`}
const \${1:${FileNameCapitalized}}${t`NextPage<Props>`} = ({}) => {
  return <div>\${2}</div>
}

export default \${1}
`;

snippet({
  name: "nextPageServerSideProps",
  prefixes: ["npssp"],
  title: "Next Page with getServerSideProps",
})`
${tm`
import { NextPage, GetServerSideProps } from 'next'

interface Props {}
`}
const \${1:${FileNameCapitalized}}${t`NextPage<Props>`} = ({}) => {
  return <div>\${2}</div>
}

export const getServerSideProps${t`GetServerSideProps`} = async (ctx) => {
  return { 
    props: {\${3}}
  }
}

export default \${1}
`;

snippet({
  name: "nextPageStaticProps",
  prefixes: ["npsp"],
  title: "Next Page with getStaticProps",
})`
${tm`import { NextPage, GetStaticProps } from 'next'

interface Props {}
`}
const \${1:${FileNameCapitalized}}${t`NextPage<Props>`} = ({}) => {
  return <div>\${2}</div>
}

export const getStaticProps${t`GetStaticProps`} = async (ctx) => {
  return {
    props: {},
  }
}

export default \${1}
`;

snippet({
  name: "nextPageStaticPaths",
  prefixes: ["npspth"],
  title: "Next Page with getStaticPaths",
})`
${tm`import { NextPage, GetStaticPaths } from 'next'

interface Props {}
`}
const \${1:${FileNameCapitalized}}${t`NextPage<Props>`} = ({}) => {
  return <div>\${2}</div>
}

export const getStaticPaths${t`GetStaticPaths`} = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default \${1}
`;

snippet({
  name: "nextServerSideProps",
  prefixes: ["nssp"],
  title: "Next getServerSideProps",
})`
export const getServerSideProps${t`GetServerSideProps`} = async (ctx) => {
  return { 
    props: {\${1}}
  }
}
`;

snippet({
  name: "nextStaticProps",
  prefixes: ["nsp"],
  title: "Next getStaticProps",
})`
export const getStaticProps${t`GetStaticProps`} = async (ctx) => {
  return {
    props: {},
  }
}
`;

snippet({
  name: "nextGetStaticPaths",
  prefixes: ["nspth"],
  title: "Next getStaticPaths",
})`
export const getStaticPaths${t`GetStaticPaths`} = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
`;

snippet({
  name: "nextApi",
  prefixes: ["na"],
  title: "Next api route",
})`
${tm`import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}
`}
export default (req${t`NextApiRequest`}, res${t`NextApiResponse<Data>`}) => {
  \{$1}
}
`;

snippet({
  name: "nextMiddleware",
  prefixes: ["nm"],
  title: "Next Middleware",
})`
import { NextResponse } from 'next/server'
${tm`import type { NextRequest } from 'next/server'
`}
export async function middleware(request${t`NextRequest`}) {
  \${1}
}

export const config = {
  matcher: '/about/:path*',
}
`;
