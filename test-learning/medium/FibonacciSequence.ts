/* _____________ Your Code Here _____________ */

type Fibonacci<T extends number, N extends Array<number> = T extends 1 | 2 ? [1] : [1, 1, 1], S extends Array<number> = [1], E extends Array<number> = [1]> = 
    T extends 1 | 2 ? 1 : T extends N['length'] ? [...S, ...E]['length'] : Fibonacci<T, [...N, 1], E, [...S, ...E]>

/**
 * 利用递归得到结果，但是当超过TS递归次数限制的时候会报错
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
  //@ts-expect-error
  Expect<Equal<Fibonacci<40>, 102334155>>,
]
