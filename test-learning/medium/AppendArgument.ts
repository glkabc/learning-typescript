/* _____________ Your Code Here _____________ */

type AppendArgument<Fn, A> = Fn extends (...arg: infer Arg) => infer R ? (...arg: [...Arg, A]) => R : never

/**
 * 参数返回名称是可以不一样的，只要位置对上就行
 * 一开始还在纠结 x: T 怎么返回 x 导致无从下手
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]