let userInput: unknown;
let userName: string;

userInput = 5
userInput = 'Marcus'

if (typeof userInput === 'string') {
    userName = userInput
}

// * Type never, just means this function will never return anything for a reason.
function generateError (message: string, code: number): never { 
throw {message: message, errorCode: code}
}

generateError('An error ocurred!', 500)