/* _____________ Your Code Here _____________ */

type ConstructTuple<L extends number, ARR extends Array<unknown> = []> = ARR['length'] extends L ? ARR : ConstructTuple<L, [...ARR, unknown]>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]