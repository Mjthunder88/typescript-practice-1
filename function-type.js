"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 2));
let combinedValues; // ? This is saying that combinedValues needs a function type that has 2 arguments that is a number and that returns a number.
// let combinedValues: Function; // * Type Function, you can store functions in values
// combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
