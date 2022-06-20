/* _____________ Your Code Here _____________ */

type Reverse<T extends Array<unknown>> = T extends [infer A, ...infer B] ? [...Reverse<B>, A] : []


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]