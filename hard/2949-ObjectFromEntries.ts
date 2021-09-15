/*
  2949 - ObjectFromEntries
  -------
  by jiangshan (@jiangshanmeta) #hard #object
  
  ### Question
  
  Implement the type version of ```Object.fromEntries```
  
  For example:
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```
  
  > View on GitHub: https://tsch.js.org/2949
*/


/* _____________ Your Code Here _____________ */
type UnionToIntersection<T>= (T extends any ? (arg: T) => void : never) extends ((arg: infer I) => void) ? I : never;

type ObjectFromEntriesBase<T> = T extends [infer Key, infer Type] ? {[key in Key extends string ? Key : never]: Type} : never;
type Copy<T> = {
  [key in keyof T]: T[key]
}
type ObjectFromEntries<T> = Copy<UnionToIntersection<ObjectFromEntriesBase<T>>>


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];



type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>,Model>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2949/answer
  > View solutions: https://tsch.js.org/2949/solutions
  > More Challenges: https://tsch.js.org
*/

