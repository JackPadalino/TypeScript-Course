//~~~~~~~~~~Getting started with defining types~~~~~~~~~~//
// Here is the original 'add' function without any types
// function add(n1, n2, result, phrase) {
//   if (result) console.log(`${phrase} ${n1 + n2}`);
//   else return n1 + n2;
// }

// // Here is the same 'add' function by now with some type declarations for
// the parameters
// function add(n1: number, n2: number, result: boolean, phrase: string) {
//   if (result) console.log(`${phrase} ${n1 + n2}`);
//   else return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;
// const result = true;
// const phrase = "The result is...";

// add(number1, number2, result, phrase);

//~~~~~~~~~~Working with object types~~~~~~~~~~//
// Creating a basic object in TS - we first declare the types of each
// key value pair that will be stored in the object, then declare the values
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Jack",
//   age: 35,
//   hobbies: ["sports", "cooking"],
// };

// console.log(person.name);
// person.hobbies.forEach((hobby) => console.log(hobby));

//~~~~~~~~~~Working with array types~~~~~~~~~~//
// Creating an array - we first declare what data types will be store in the array
// then create the array as normal
// let favoriteActivities: string[];
// favoriteActivities = ["coding", "djing", "dancing"];

// console.log(favoriteActivities);

//~~~~~~~~~~Working with enum types~~~~~~~~~~//
// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Jack",
//   age: 35,
//   hobbies: ["sports", "cooking"],
// };

// console.log(person.name);
// person.hobbies.forEach((hobby) => console.log(hobby));

//~~~~~~~~~~Working with union types~~~~~~~~~~//
// function combine(input1: number | string, input2: number | string) {
//   let result: number | string;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const result = combine(2, "Max");
// console.log(result);
// const result2 = combine(2, 5);
// console.log(result2);

//~~~~~~~~~~Working with literal types~~~~~~~~~~//
// By setting a literal type on the function's parameters, we are saying the function will ONLY work
// as long as specific values, not just types, are passed in.
// function displayNames(name: "Jack" | "Jasmine") {
//   console.log(name);
// }

// displayNames("David");

//~~~~~~~~~~Working with return types~~~~~~~~~~//
// We can explicityly state what type of a data function will return

// Here is an add function that adds two numbers:
function add(num1: number, num2: number) {
  return num1 + num2;
}

// Here is the same function, but now we will explicitly define what type the function
// is going to return
function addEm(num1: number, num2: number): number {
  return num1 + num2;
}

//If a function is not meant to return something, we can state that the funciton
// has a 'void' return type:
function displaySomething(thing: string): void {
  console.log(thing);
}
