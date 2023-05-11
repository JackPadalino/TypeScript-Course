function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(3, 2));
