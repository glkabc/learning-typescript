/* _____________ Your Code Here _____________ */
type Curry<T> = T extends (...arg: infer A) => infer R ? A extends [infer B, ...infer C] ? (arg: B) => Curry<(...arg: C) => R> : R : never

declare function Currying<T>(fn: T): Curry<T>

/**
 * 网上答案
 * 我的写法 declare function Currying<T>(fn: T): T extends (...arg: infer A) => infer R ? A extends [infer B, ...infer C] ? (arg: B) => Currying<(...arg: C) => R> : R : never
 * 报错， 不知道为什么
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]