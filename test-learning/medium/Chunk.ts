/* _____________ Your Code Here _____________ */

type Chunk<T extends unknown[], N extends number, C extends unknown[] = []> =
  T extends [infer First, ...infer Rest] ? (
    C['length'] extends N ? (
      [C, ...Chunk<Rest, N, [First]>]
    ) : Chunk<Rest, N, [...C, First]>
  ) : C extends [] ? (
    []
  ) : [C]


/**
 * 网上答案
 * 没想到这种写法，First 和 [C]
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
