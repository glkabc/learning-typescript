/* _____________ Your Code Here _____________ */
type ReverseArg<T> = T extends [infer A, ...infer B] ? [...ReverseArg<B>, A] : []
type FlipArguments<T> = T extends (...arg: infer A) => infer B ? (...arg: ReverseArg<A>) => B : never


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]
