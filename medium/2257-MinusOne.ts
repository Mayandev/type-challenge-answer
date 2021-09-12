/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### Question
  
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  
  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/


/* _____________ Your Code Here _____________ */

// `${K['length']}`  important
// use `${K['length']}` extends T instead of T extends `${K['length']}`
type DigitalToArray<T extends string, K extends any[] = []> = `${K['length']}` extends T
  ? K
  : DigitalToArray<T, [...K, 1]>

type TimesTen<T extends any[] = []> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]

type StringToArray<T extends string, K extends any[] = []> = T extends `${infer L}${infer R}`
  ? StringToArray<R, [...TimesTen<K>, ...DigitalToArray<L>]>
  : K

type MinusOne<T extends number> = StringToArray<`${T}`> extends [infer F, ...infer R] ? R['length'] : never


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/

