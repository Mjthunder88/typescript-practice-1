"use strict";
const combine = (input1, // * Type union
input2, // * Type union
resultType // * Literal type combined with aunion type
) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number' ) {
    //     return +result
    // } else {
    //     return result.toString()
    // }
    return result;
};
const combinedAges = combine(23, 24, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("23", "24", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Marcus", "Maggie", "as-text");
console.log(combinedNames);
