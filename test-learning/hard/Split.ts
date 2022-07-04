/* _____________ Your Code Here _____________ */
type SplitWord<S, W extends string, L extends Array<unknown> = []> =
    S extends `${infer A}${W}${infer B}` ? SplitWord<B, W, [...L, A]> : S extends '' ? L : [...L, S]

type Split<S extends string, SEP extends string> = 
    string extends S ? string[] : S extends '' ? SEP extends '' ? [] : [''] : SplitWord<S, SEP>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]