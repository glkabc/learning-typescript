/* _____________ Your Code Here _____________ */

type Flip<T extends Record<PropertyKey, any>> = {
    [K in keyof T as `${T[K]}`]: K
}

type aa = Record<PropertyKey, any>

/**
 * 有点不是很懂
 * 要限定T的类型才能在 as 后面进行这样的操作
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]