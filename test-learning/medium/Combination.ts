/* _____________ Your Code Here _____________ */
type Combination<T extends string[], U = T[number], A = U> = U extends infer U extends string
  ? `${U} ${Combination<T, Exclude<A, U>>}` | U
  : never;



 type Helper<T extends any[],Suffix extends any[] = []> =  T extends [infer F,...infer R]? Helper<R ,Suffix | [F,...Suffix] >: Suffix

 type Join<
   T extends any[],
   Prefix extends string = ''
 > = 
 T extends [infer F,...infer R]?
   Join<R,`${Prefix}${Prefix extends ''?'':' '}${F&string}`>
   : Prefix;
 type CombinationOne<T extends any[]> = Join<Filter<Helper<T>,T['length'] >> | Join<T>
 
 type Filter<
   T extends any[],L 
   extends number,
   U extends any[] = T
 > = 
 U extends T? 
   U['length'] extends L | 0? 
   never
   :U
   :never

/**
 * 网上答案的两种答案
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]

