# Javascript snippets

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

```javascript
const FileName = ({}) => {
  return <div>$2</div>
}

export default $1
```

## `npssp` - nextPageServerSideProps

```javascript
const FileName = ({}) => {
  return <div>$2</div>
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default $1
```

## `npsp` - nextPageStaticProps

```javascript
const FileName = ({}) => {
  return <div>$2</div>
}

export const getStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default $1
```

## `npspth` - nextPageStaticPaths

```javascript
const FileName = ({}) => {
  return <div>$2</div>
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export default $1
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

## `nimg` - nextImage

```javascript
<Image src="$1" alt="$2" />
```

## `na` - nextApi

```javascript
export default (req, res) => {
  ${1}
}
```

## `nm` - nextMiddleware

```javascript
import { NextResponse } from 'next/server'
export async function middleware(request) {
  ${1}
}

export const config = {
  matcher: '/about/:path*',
}
```
