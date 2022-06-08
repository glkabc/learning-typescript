/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends Array<unknown>> = T[number]
type TupleToUnionTwo<T extends Array<unknown>> = T extends Array<infer P> ? P : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

