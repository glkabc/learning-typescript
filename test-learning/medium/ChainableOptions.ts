
/* _____________ Your Code Here _____________ */

type Chainable<R extends Object = {}> = {
    option<T extends string, K>(key: T extends keyof R ? never : T, value: K): Chainable<R & {[W in T]: K}>,
    get(): R
}

/**
 * 不是很懂
 * 看网上的 当 R 等于 {} 时才能正确 ---> 初始一个对象用来存储结果，不用再在其他地方保存结果了
 * 递归返回时 键需要一个（W）值来接收才能正确
 * never 的地方保证类型不是string 也是可以的，因为前面已经限制了 key 的类型必须是 string ，不是的话 在使用的时候 就会提示错误
 */

/* _____________ Test Cases _____________ */
  import type { Alike, Expect } from '@type-challenges/utils'
  
  declare const a: Chainable
  
  const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()
  
  const result2 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 'last name')
    .get()
  
  type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
  ]
  
  type Expected1 = {
    foo: number
    bar: {
      value: string
    }
    name: string
  }
  
  type Expected2 = {
    name: string
  }
  