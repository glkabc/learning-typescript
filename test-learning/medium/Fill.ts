
/* _____________ Your Code Here _____________ */

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends Array<any> = []
> = 
T extends [infer F, ...infer R]
  ? Result["length"] extends Start
    ? Start extends End
      ? [...Result, ...T]
      : Fill<R, N, [...Result, N]["length"] & number, End, [...Result, N]>
    : Fill<R, N, Start, End, [...Result, F]>
  : Result;

/**
 * 网上答案
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]