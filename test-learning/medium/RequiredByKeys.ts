/* _____________ Your Code Here _____________ */

type Copy<T> = {
    [P in keyof T]: T[P]
}

type RequiredByKeys<T, K = {}> = {} extends K ? {[P in keyof T]-?: T[P]} :  Copy<Pick<Required<T>, Exclude<keyof T, Exclude<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]