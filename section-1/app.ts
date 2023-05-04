// Here is the original 'add' function without any types
// function add(n1, n2, result, phrase) {
//   if (result) console.log(`${phrase} ${n1 + n2}`);
//   else return n1 + n2;
// }

// Here is the same 'add' function by now with some type declarations for
// the parameters
function add(n1: number, n2: number, result: boolean, phrase: string) {
  if (result) console.log(`${phrase} ${n1 + n2}`);
  else return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const result = true;
const phrase = "The result is...";

add(number1, number2, result, phrase);
