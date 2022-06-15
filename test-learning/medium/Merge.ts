/* _____________ Your Code Here _____________ */

type Merge<F extends Object, S extends Object> = {[K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never }

/**
 * 没想起来用（）来定义K
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]
