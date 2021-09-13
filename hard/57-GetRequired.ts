/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetRequired<T>`, which remains all the required fields
  
  For example
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > View on GitHub: https://tsch.js.org/57
*/


/* _____________ Your Code Here _____________ */

export type GetRequired<T> = {
  [K in ExtractRequiredKeys<T>]: T[K];
};

export type ExtractRequiredKeys<T> ={ [K in keyof T]: T extends { [K1 in K]: any } ? K : never}[keyof T] 

type B = 'a' | 'b'

type Foo = { foo: number, bar?: string, a: string }

// type D = Foo extends {bar: any} ? true : false;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
    Expect<Equal<GetRequired<{ foo: number, bar?: undefined, a: undefined }>, {foo: number, a: undefined }>>,

]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/57/answer
  > View solutions: https://tsch.js.org/57/solutions
  > More Challenges: https://tsch.js.org
*/

