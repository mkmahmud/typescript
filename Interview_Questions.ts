  // ❓ Interview Questions ❓\\

  

// ❔  1. What is TypeScript, and how is it different from JavaScript?
// 👷‍♂️ Answer:  TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, improved error checking, and enhanced tooling support. 


// ❔ 2. Can you explain the difference between "interface" and "type" in TypeScript?
// 👷‍♂️  Answer: Interface and type almost same. But interface used for Object and Class for best practices. 



// ❔ 3. Can you give an example of how to use generics in TypeScript?
// 👷‍♂️ Answer: 
// function generic<T>(params: T): T {
//     return params;
// }
// const Output = generic<string>('mk')
// console.log(Output)


// ❔  4. What is the difference between an "unknown" and "any" type in TypeScript?
// 👷‍♂️ Answer: Unknown and any are used for an unknown type in typeScript. Any type allows to assign any value and Unknown type represents a value of an unknown type


// ❔  5. What is the "as" keyword used for in TypeScript?
// 👷‍♂️ Answer: The "as" keyword used for assertions in typescript. This is the example 
// let value: unknown = "MK";
// let Length: number = (value as string).length



// ❔ 6. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
// 👷‍♂️ Answer: Type guards used for checking which is allowed to go next. For the 'in' oparetor it's check objects property if property exist then goes next. On the other hand 'typeof' check data type like string, number, etc.  



// ========================== ❓ Optional Questtions ❓ ===============================\\

// ❔ 1. Can you explain what a "tuple" is in TypeScript? 
// 👷‍♂️ Answer: Tupple used for Typescript array. By using tupple we can define array's data type. 


// ❔ 2. Can you give an example of how to use "readonly" properties in TypeScript? 
// 👷‍♂️ Answer: we use 'readonly' for initialize a poperty of class. Example 
// class MyReadonly {
//   name: string;
//   readonly age: number
//   constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age
//   }
// }


// ❔ 3. Can you give an example of how to use "conditional types" in TypeScript?
// 👷‍♂️ Answer: type conditional<T> = T extends string ? string : T extends number ? number : never;