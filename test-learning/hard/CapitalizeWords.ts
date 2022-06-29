/* _____________ Your Code Here _____________ */
type UppercaseLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
type Letters = UppercaseLetters | Lowercase<UppercaseLetters>

// type UppercaseWord<W extends string> = W extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : W

type CapitalizeWords<S extends string, P extends string = ''> = 
    S extends `${infer A}${infer B}` ? 
        P extends `${string}${Letters}` ? 
            CapitalizeWords<B, `${P}${A}`> : 
            CapitalizeWords<B, `${P}${Capitalize<A>}`> :
        P

/**
 * 网上答案
 * 我的写法无法通过全部测试
 * 
 * 这个解题没看懂 P extends `${string}${Letters}` 什么意思
 */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]
