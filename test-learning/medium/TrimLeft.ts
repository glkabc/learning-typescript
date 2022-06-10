/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer K}` ? TrimLeft<K> : S;

/**
 * 没想到还可以这样写
 * 递归一次一次的去除一个空格或回车和tab，最后一直达到匹配不到，使用infer接收剩余变量返回
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]
