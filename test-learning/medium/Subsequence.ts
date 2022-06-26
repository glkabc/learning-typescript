/* _____________ Your Code Here _____________ */

type Subsequence<T> = T extends [infer A, ...infer B] ? Subsequence<B> | [A, ...Subsequence<B>] : []
/**
 * 网上答案
 */

type SubsequenceOne<T extends Array<unknown>, K extends Array<unknown> = [] > = 
    T extends [infer A, ...infer B] ? SubsequenceOne<B, K | [...K, A]> : K

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]
