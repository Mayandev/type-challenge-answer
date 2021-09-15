/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `UnionToIntersection<U>`
  
  For example
  
  ```ts
  type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```
  
  > View on GitHub: https://tsch.js.org/55
*/


/* _____________ Your Code Here _____________ */
// U extends any ? (args: U) => void : never
// (args: 'foo') => void | (args: 42) => void | (args: true) => void
// 
type UnionToIntersection<U> = (U extends any ? (args: U) => void : never) extends ((args: infer I) => void) ? I : never;

type A = (((args: 42) => void) | ((args: 42) => void )| ((args: 42) => void)) extends  ((args: 42) => void) ? true : false;



/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
    Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/55/answer
  > View solutions: https://tsch.js.org/55/solutions
  > More Challenges: https://tsch.js.org
*/

