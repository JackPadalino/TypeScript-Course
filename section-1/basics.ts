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

// Creating an array - we first declare what data types will be store in the array
// then create the array as normal
// let favoriteActivities: string[];
// favoriteActivities = ["coding", "djing", "dancing"];

// console.log(favoriteActivities);

// Creating an ENUM type - an array of acceptable values
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Jack",
  age: 35,
  hobbies: ["sports", "cooking"],
};

console.log(person.name);
person.hobbies.forEach((hobby) => console.log(hobby));
