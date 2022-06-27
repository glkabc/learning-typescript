/* _____________ Your Code Here _____________ */
type UnionToFnArg<U> = U extends any ? (arg: U) => any : never

type UnionToIntersection<U> = UnionToFnArg<U> extends (arg: infer A) => any ? A : never

/**
 * UnionToIntersection<'foo' | 42 | true> //===> never
 * 'foo' & 42 & true 本身就没有符合条件的类型 所以never是正确的
 * 
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]