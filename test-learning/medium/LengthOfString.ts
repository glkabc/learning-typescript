
/* _____________ Your Code Here _____________ */

type StringToArray<S extends string> = S extends `${infer A}${infer B}` ? [A, ...StringToArray<B>] : []
type LengthOfString<S extends string> = StringToArray<S>['length']

type aaa = LengthOfString<''>

/**
 * string 不能使用['length']， 要想办法转成数组，然后length才可以使用
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
