/* _____________ Your Code Here _____________ */

type GetRequired<T> = {
    [P in keyof T as {[K in P]: T[K]} extends T ? P : never]: T[P]
}


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]