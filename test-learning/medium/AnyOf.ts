/* _____________ Your Code Here _____________ */
type DC<T extends readonly any[], P> = 
    T extends [infer A, ...infer B] ? 
        A extends P ? [...DC<B, P>] : [A, ...DC<B, P>] : []

type QS<T extends readonly any[]> = DC<T, 0 | [] | '' | false>

type AnyOf<T extends readonly any[]> = T extends [] ? false : QS<T> extends [{}] ? {} extends QS<T>[number] ? false : true : true

// type aaa = Array<any> extends Object ? true : false

/**
 * number string boolean Array 都继承 Object
 * 只能先过滤出来不是Object类型的，然后在进行Object类型的比较
 */

 type AnyOfOne<T extends readonly any[]> = T extends [infer F,...infer R]? F extends false|''| 0| [] | Record<string,never> | null | undefined ? AnyOf<R> : true :false

 /**
  * 网上的答案
  */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]
