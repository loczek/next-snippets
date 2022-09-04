import { Snippet } from "../gen";
import { first } from "../utils/placeholders";
import { tsImport, tsSpace, tsType } from "../utils/typescript";

export const generateNextLang = () => {
  const NextApi: Snippet = {
    prefix: "napi",
    body: [
      tsImport("import type { NextApiRequest, NextApiResponse } from 'next'"),
      tsSpace(),
      tsImport("interface Data {}"),
      tsSpace(),
      `export default async function handler(req${tsType("NextApiRequest")}, res${tsType("NextApiResponse<Data>")}) {`,
      `  ${first}`,
      "}",
    ],
  };
  const NextMiddleware: Snippet = {
    prefix: "nmid",
    body: [
      "import { NextResponse } from 'next/server'",
      tsImport("import type { NextRequest } from 'next/server'"),
      tsSpace(),
      `export async function middleware(request${tsType("NextRequest")}) {`,
      `  ${first}`,
      "}",
      "",
      "export const config = {",
      "  matcher: '/about/:path*',",
      "}",
    ],
  };

  return [NextApi, NextMiddleware];
};
