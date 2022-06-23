/* _____________ Your Code Here _____________ */

type ArrToUnion<T extends number | Array<number>> = T extends Array<unknown> ? T[number] : T

type Without<T extends Array<number>, U extends number | Array<number>, UU = ArrToUnion<U>> = 
  T extends [infer A, ...infer B extends Array<number>] ? A extends UU ? [...Without<B, U>] : [A, ...Without<B, U>] : []

type aaa = Without<[1, 2, 4, 1, 5], [1, 2]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]