// Here we are defining an "interface" which describes the "shape" of
// an object. This is an interface that describes an object "Person"
// that will have three key-value pairs: a name, an age, and a greet
// function that accepts one parameter (phrase) and does not
// return anything (void)

// By defining interfaces we are ensuring that an object or class instance
// will always have the same shape (same attributes and types)
interface Hobby {
  activities: string[];
}

// By using the "extend" key word we can combine interfaces to form
// larger, more complex interfaces
interface Person extends Hobby {
  name: string;
  age: number;
  height?: number; // the ? makes this paramters optional
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Jack",
  age: 30,
  activities: ["coding", "dj"],
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there! I am");

// We can also define interfaces that describe the shape of a function.
// Here is the interface for a function "AddEmUp". We are describing
// the parameters num1 and num2, and then declaring the return type.
interface Add {
  (num1: number, num2: number): number;
}

let AddEmUp: Add;

AddEmUp = (num1: number, num2: number) => {
  return num1 + num2;
};
