/* _____________ Your Code Here _____________ */

type StringToArray<T extends string> =  T extends `${infer A}${infer B}` ? [A, ...StringToArray<B>] : []
type StringToUnion<T extends string> = T extends '' ? never : StringToArray<T> extends Array<infer A> ? A : never


type StringToUnionTwo<T extends string> = T extends `${infer A}${infer B}` ? A | StringToUnionTwo<B> : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
