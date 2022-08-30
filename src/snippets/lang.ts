import { Snippet } from "../gen";
import { tsImport, tsSpace, tsType } from "../utils/typescript";

export const generateNextLang = () => {
  const NextApi: Snippet = {
    prefix: "na",
    body: [
      tsImport("import type { NextApiRequest, NextApiResponse } from 'next'"),
      tsSpace(),
      tsImport("interface Data {}"),
      tsSpace(),
      `export default (req${tsType("NextApiRequest")}, res${tsType("NextApiResponse<Data>")}) => {`,
      "  ${1}",
      "}",
    ],
  };
  const NextMiddleware: Snippet = {
    prefix: "nm",
    body: [
      "import { NextResponse } from 'next/server'",
      tsImport("import type { NextRequest } from 'next/server'"),
      tsSpace(),
      `export async function middleware(request${tsType("NextRequest")}) {`,
      "  ${1}",
      "}",
      "",
      "export const config = {",
      "  matcher: '/about/:path*',",
      "}",
    ],
  };

  return [NextApi, NextMiddleware];
};

// "nextApi": {
//   "prefix": ["na"],
//   "body": [
//     "import type { NextApiRequest, NextApiResponse } from 'next'",
//     "",
//     "interface Data {}",
//     "",
//     "export default (req: NextApiRequest, res: NextApiResponse<Data>) => {",
//     "  {$1}",
//     "}"
//   ]
// },
// "nextMiddleware": {
//   "prefix": ["nm"],
//   "body": [
//     "import { NextResponse } from 'next/server'",
//     "import type { NextRequest } from 'next/server'",
//     "",
// "export async function middleware(request: NextRequest) {",
// "  ${1}",
// "}",
// "",
// "export const config = {",
// "  matcher: '/about/:path*',",
// "}"
//   ]
// }
