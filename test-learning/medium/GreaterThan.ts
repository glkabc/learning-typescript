/* _____________ Your Code Here _____________ */

type NumDownOne<T extends number, ARR extends Array<number> = [], OLD_ARR extends Array<number> = ARR> = 
    ARR['length'] extends T ? OLD_ARR['length'] : NumDownOne<T, [...ARR, 1], ARR> 

type GreaterThan<T extends number, U extends number> = T extends U ? false : T extends 0 ? false : U extends 0 ? true : GreaterThan<NumDownOne<T>, NumDownOne<U>>

/**
 * 同样是利用递归，会有递归次数超过1000的话会报错
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  //@ts-expect-error
  Expect<Equal<GreaterThan<1101, 11>, true>>,
]
