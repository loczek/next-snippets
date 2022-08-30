# Typescript snippets

- `np` - nextPage
- `npssp` - nextPageServerSideProps
- `npsp` - nextPageStaticProps
- `npspth` - nextPageStaticPaths
- `nssp` - nextServerSideProps
- `nsp` - nextStaticProps
- `nspth` - nextStaticPaths
- `nimg` - nextImage
- `na` - nextApi
- `nm` - nextMiddleware

## `np` - nextPage

```typescript
import { NextPage } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div>$2</div>
}

export default $1
```

## `npssp` - nextPageServerSideProps

```typescript
import { NextPage, GetServerSideProps } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div>$2</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default $1
```

## `npsp` - nextPageStaticProps

```typescript
import { NextPage, GetStaticProps } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div>$2</div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default $1
```

## `npspth` - nextPageStaticPaths

```typescript
import { NextPage, GetStaticPaths } from 'next'

interface Props {}

const FileName: NextPage<Props> = ({}) => {
  return <div>$2</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default $1
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

## `nimg` - nextImage

```typescript
<Image src="$1" alt="$2" />
```

## `na` - nextApi

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  ${1}
}
```

## `nm` - nextMiddleware

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  ${1}
}

export const config = {
  matcher: '/about/:path*',
}
```
