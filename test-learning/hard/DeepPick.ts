/* _____________ Your Code Here _____________ */
type UnionToIntersect<T> = (T extends any ? (arg: T) => void : never) extends (arg: infer I) => void ? I : never

type DeepUnion<O, U extends string> = 
    U extends `${infer A extends keyof O & string}.${infer Rest}`
        ? { [K in A]: DeepPick<O[A], Rest> }
        : U extends keyof O
        ? { [K in U]: O[U] }
        : never

type DeepPick<O, S extends string> = UnionToIntersect<DeepUnion<O, S>>

/**
 * 网上答案
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }>>,
]

