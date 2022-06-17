/* _____________ Your Code Here _____________ */

type IsUnion<T, K = T> = T extends K ? [K] extends [T] ? false : true : false;

/**
 * 网上答案:
 * 
 * if T is union type, it must can be distributive conditional type and must be naked type, eg: T extends never or T extends S
 * 
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false >>,
  Expect<Equal<IsUnion<string|number>, true >>,
  Expect<Equal<IsUnion<'a'|'b'|'c'|'d'>, true >>,
  Expect<Equal<IsUnion<undefined|null|void|''>, true >>,
  Expect<Equal<IsUnion<{ a: string }|{ a: number }>, true >>,
  Expect<Equal<IsUnion<{ a: string|number }>, false >>,
  Expect<Equal<IsUnion<[string|number]>, false >>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string|never>, false >>,
  Expect<Equal<IsUnion<string|unknown>, false >>,
  Expect<Equal<IsUnion<string|any>, false >>,
  Expect<Equal<IsUnion<string|'a'>, false >>,
]
