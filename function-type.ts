function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);

}

function addAndHandle (n1: number, n2: number, cb: (num: number) => void) { // * function type with a callback! 
const result = n1 + n2
cb(result)
}

printResult(add(5, 2));


let combinedValues: (a: number, b: number) => number; // ? This is saying that combinedValues needs a function type that has 2 arguments that is a number and that returns a number.
// let combinedValues: Function; // * Type Function, you can store functions in values

combinedValues = add;
console.log(combinedValues(8, 8))


addAndHandle(10, 20, (result) => { // * This is the callback we pass to addAndHandle 
    console.log(result)
})