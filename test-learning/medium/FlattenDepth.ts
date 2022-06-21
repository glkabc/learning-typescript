/* _____________ Your Code Here _____________ */

type FlattenDepth<T, K extends number = 1, P extends Array<any> = []> =
    T extends [infer A, ...infer B] ? 
      A extends Array<any> ? 
        P['length'] extends K ? 
          [A, ...FlattenDepth<B, K, P>] : 
          [...FlattenDepth<A, K, [...P, '']>, ...FlattenDepth<B, K, P>] : 
        [A, ...FlattenDepth<B, K, P>] :
      T


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]
