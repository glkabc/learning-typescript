/* _____________ Your Code Here _____________ */

/**
 * 这种方式类型匹配不上，但是符合得到的数据
 */
// type PartialByKeys<T, K = {}> = {} extends K ? {
//     [P in keyof T]?: T[P]
// } : {
//     [P in keyof T as P extends K ? P : never]?: T[P]
// } & {
//     [P in Exclude<keyof T, K>]: T[P]
// }


type Copy<T> = {
    [K in keyof T]:T[K]
}
type PartialByKeys<T, K = keyof T> = Copy<Pick<Partial<T>, Exclude<keyof T, Exclude<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>>

/**
 * 为什么要使用Copy在去分配一下呢，不分配就区分不出来
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]
