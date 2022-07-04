/* _____________ Your Code Here _____________ */

type MutableKeys<T> = keyof {
    [Key in keyof T as Equal<Pick<T, Key>, Readonly<Pick<T, Key>>> extends true ? never : Key ]: T[Key]
}

/**
 * 网上答案
 * 没有想到用pick去得到类型，然后在用readonly去修改类型，在比较
 */
  
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
Expect<Equal<MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
Expect<Equal<MutableKeys<{}>, never>>,
]