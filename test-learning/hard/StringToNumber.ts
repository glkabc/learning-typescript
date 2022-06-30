/* _____________ Your Code Here _____________ */
type NumberS = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type IsNumber<S> = S extends `${infer A}${infer C}` ? A extends NumberS ? IsNumber<C> : false : true
type StrToNum<S, L extends Array<number> = []> = `${L['length']}` extends S ? L['length'] : StrToNum<S, [...L, 1]>

type ToNumber<S extends string> = IsNumber<S> extends true ? StrToNum<S> : never


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]
