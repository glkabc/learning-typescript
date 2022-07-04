/* _____________ Your Code Here _____________ */

type IsRequiredKey<T, K extends keyof T> = T extends Record<K, T[K]> ? true : false
type IsRequiredKeyOne<T, K extends keyof T> = T extends {[P in K]-?: T[P]} ? true : false


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
]
