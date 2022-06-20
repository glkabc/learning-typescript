/* _____________ Your Code Here _____________ */
type SR = string | number | symbol
type TupleToNestedObject<T, U> = [] extends T ? U : T extends [infer A extends SR, ...infer B] ? {[P in A]: TupleToNestedObject<B, U>} : never


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]
