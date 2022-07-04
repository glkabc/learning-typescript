/* _____________ Your Code Here _____________ */
type ReStr<S extends string | number> = `${S}` extends `${infer A}${infer B}` ? `${ReStr<B>}${A}` : S

type IsPalindrome<T extends string | number> = ReStr<T> extends `${T}` ? true : false


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]
