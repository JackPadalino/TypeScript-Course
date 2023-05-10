const btn = document.querySelector("button");
const inputOne = document.getElementById("num1")! as HTMLInputElement;
const inputTwo = document.getElementById("num2")! as HTMLInputElement;

function addNums(num1: number, num2: number) {
  return num1 + num2;
}

btn.addEventListener("click", function () {
  console.log(addNums(+inputOne.value, +inputTwo.value));
});
