/* _____________ Your Code Here _____________ */

/**
 * 由于递归次数做了限制，所以超过1000的数不能使用这个方法
 */

// type MinusOne<T extends number, K extends any[] = []> = [...K, '']['length'] extends T ? K['length'] : MinusOne<T, [...K, '']> 



 type Digital = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
 type MakeDigitalArray<
   N extends Digital,
   T extends any[] = []
 > = N extends `${T['length']}` ? T : MakeDigitalArray<N, [...T, 0]>
 type Multiply10<T extends any[]> = [...T,...T,...T,...T,...T,...T,...T,...T,...T,...T]
 
 type ToArray<
   S extends number|string,
   T extends any[] = []
 > = `${S}` extends `${infer F}${infer L}`
       ? F extends Digital
         ? ToArray<L, [...Multiply10<T>, ...MakeDigitalArray<F>]>
         : never
       : T
 
 type Minus<
   S extends number,
   N extends number
 > = ToArray<S> extends [...ToArray<N>, ...infer L] ? L['length'] : 0
 
 type MinusOne<S extends number> = Minus<S, 1>
 /**
  * 网上的答案: 
  * 大概意思是避免递归次数超过限制，所以在判断的时候每次增加10个数组长度，这样就能在1000的限制下得到答案
  * 但是这个也只是扩大了10倍的数据减一，操过9999后还是会出错
  * 
  * 我的猜测是这题不能使用数组length来进行数的减一
  */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9999>, 9998>>,
  //@ts-expect-error
  Expect<Equal<MinusOne<10000>, 9999>>,
]
