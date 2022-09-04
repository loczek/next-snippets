# Introduction

Next JS/TS Snipets for VScode
Designed to be simple, short and powerfull

## Table of Contents

- [How it works](#explanation)
- [Contributing](#contributing)
- [Javascript Snippets](#javascript-snippets)
- [Typescript Snippets](#typescript-snippets)

## Explanation

The snippets are a combination of:

- `n` next
- `np` next page
- `ssp` server side props
- `sp` static props
- `spth` static paths

## Contributing

Feel free to open a pull request if you to add a snippet, suggest a change, fix a bug or anything else.

# Typescript snippets

- `np` - nextPage
- `npssp` - nextPageServerSideProps
- `npsp` - nextPageStaticProps
- `npspth` - nextPageStaticPaths
- `nssp` - nextServerSideProps
- `nsp` - nextStaticProps
- `nspth` - nextStaticPaths
- `nip` - nextInitialProps
- `nimg` - nextImage
- `napp` - nextApp
- `ndoc` - nextDocument
- `napi` - nextApi
- `nmid` - nextMiddleware

## `np` - nextPage

```typescript
import { NextPage } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div></div>
}

export default FileName
```

## `npssp` - nextPageServerSideProps

```typescript
import { NextPage, GetServerSideProps } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default FileName
```

## `npsp` - nextPageStaticProps

```typescript
import { NextPage, GetStaticProps } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default FileName
```

## `npspth` - nextPageStaticPaths

```typescript
import { NextPage, GetStaticPaths } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div></div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default FileName
```

## `nssp` - nextServerSideProps

```typescript
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
```

## `nsp` - nextStaticProps

```typescript
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}
```

## `nspth` - nextStaticPaths

```typescript
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
```

## `nip` - nextInitialProps

```typescript
FileName.getInitialProps = async (ctx) => {
  return {
    
  }
}
```

## `nimg` - nextImage

```typescript
<Image src="" alt="" />
```

## `napp` - nextApp

```typescript
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## `ndoc` - nextDocument

```typescript
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
```

## `napi` - nextApi

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
}
```

## `nmid` - nextMiddleware

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  
}

export const config = {
  matcher: '/about/:path*',
}
```

# Javascript snippets

- `np` - nextPage
- `npssp` - nextPageServerSideProps
- `npsp` - nextPageStaticProps
- `npspth` - nextPageStaticPaths
- `nssp` - nextServerSideProps
- `nsp` - nextStaticProps
- `nspth` - nextStaticPaths
- `nip` - nextInitialProps
- `nimg` - nextImage
- `napp` - nextApp
- `ndoc` - nextDocument
- `napi` - nextApi
- `nmid` - nextMiddleware

## `np` - nextPage

```javascript
const FileName = ({}) => {
  return <div></div>
}

export default FileName
```

## `npssp` - nextPageServerSideProps

```javascript
const FileName = ({}) => {
  return <div></div>
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default FileName
```

## `npsp` - nextPageStaticProps

```javascript
const FileName = ({}) => {
  return <div></div>
}

export const getStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default FileName
```

## `npspth` - nextPageStaticPaths

```javascript
const FileName = ({}) => {
  return <div></div>
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default FileName
```

## `nssp` - nextServerSideProps

```javascript
export const getServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
```

## `nsp` - nextStaticProps

```javascript
export const getStaticProps = async (ctx) => {
  return {
    props: {},
  }
}
```

## `nspth` - nextStaticPaths

```javascript
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
```

## `nip` - nextInitialProps

```javascript
FileName.getInitialProps = async (ctx) => {
  return {
    
  }
}
```

## `nimg` - nextImage

```javascript
<Image src="" alt="" />
```

## `napp` - nextApp

```javascript
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## `ndoc` - nextDocument

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
```

## `napi` - nextApi

```javascript
export default async function handler(req, res) {
  
}
```

## `nmid` - nextMiddleware

```javascript
import { NextResponse } from 'next/server'
export async function middleware(request) {
  
}

export const config = {
  matcher: '/about/:path*',
}
```
