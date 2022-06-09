/* _____________ Your Code Here _____________ */

type Last<T extends Array<any>> = T extends [...infer A , infer B] ? B : never

/**
 * 将infer 放到extends右边才行
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

