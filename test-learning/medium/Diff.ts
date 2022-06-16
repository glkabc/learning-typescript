/* _____________ Your Code Here _____________ */

type Diff<T, K> = {
    [P in Exclude<keyof T | keyof K, keyof T & keyof K>]: P extends keyof T ? T[P] : P extends keyof K ? K[P] : never
}

/**
 * union 类型进行过滤 得到无交集的类型
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]