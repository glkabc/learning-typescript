/* _____________ Your Code Here _____________ */

type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
/**
 * 复制的测试Equal类型定义
 */

type IndexOf<T extends Array<unknown>, U, AT extends Array<number> = []> = T extends [infer A, ...infer B] ? MyEqual<A, U> extends true ? AT['length'] : IndexOf<B, U, [...AT, 1]> : -1

/**
 * 使用Equal来判断两个类型是否相等，避免any的问题
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]