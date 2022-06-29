/* _____________ Your Code Here _____________ */

type ControlsMap = {
    c: 'char'
    s: 'string'
    d: 'dec'
    o: 'oct'
    h: 'hex'
    f: 'float'
    p: 'pointer'
  }
  
  type KeyOfValue<Key extends string> = Key extends keyof ControlsMap ? [ControlsMap[Key]] : []
  
  
  type ParsePrintFormat<T extends string, K extends Array<string> = []> = 
      T extends `${infer A}%${infer B}${infer C}` ? ParsePrintFormat<C, [...K, ...KeyOfValue<B>]> : K
  
  type aaa = ParsePrintFormat<'The result is %q.'>
  
  /* _____________ Test Cases _____________ */
  import type { Equal, Expect } from '@type-challenges/utils'
  
  type cases = [
    Expect<Equal<ParsePrintFormat<''>, []>>,
    Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
    Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
    Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
    Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
  ]