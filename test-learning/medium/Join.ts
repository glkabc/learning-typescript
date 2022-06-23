/* _____________ Your Code Here _____________ */

type Join<T extends Array<string>, U extends string | number> = 
    T extends [infer A extends string, ...infer B extends Array<string>] ? B['length'] extends 0 ? `${A}` : `${A}${U}${Join<B, U>}` : ''


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]