/* _____________ Your Code Here _____________ */

type UnionToIntersectionFn<U> = (
    U extends unknown ? (k: () => U) => void : never
  ) extends (k: infer I) => void ? I : never;
  
  type GetUnionLast<U> = UnionToIntersectionFn<U> extends () => infer I 
    ? I : never;
  
  type Prepend<Tuple extends unknown[], First> = [First, ...Tuple];
  
  type UnionToTuple<
    Union, 
    T extends unknown[] = [], 
    Last = GetUnionLast<Union>
  > = [Union] extends [never] 
    ? T 
    : UnionToTuple<Exclude<Union, Last>, Prepend<T, Last>>;


/**
 * 网上答案
 * https://github.com/astak16/blog-ts-challenges/issues/22
 */


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]