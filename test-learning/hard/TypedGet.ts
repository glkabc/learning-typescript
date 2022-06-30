
/* _____________ Your Code Here _____________ */

type StrToArr<T, L extends Array<unknown> = []> = T extends `${infer A}.${infer B}` ? StrToArr<B, [...L, A]> : [...L, T]


type Get<T, K, L extends Array<unknown> = [], R extends keyof T = keyof T> = 
    R extends keyof T ?
        StrToArr<K>[L['length']] extends R ? 
            StrToArr<K>['length'] extends [...L, unknown]['length'] ? T[R] : 
            Get<T[R], K, [...L, 1], keyof T[R]> : 
        never :
    never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  hello: 'world'
}