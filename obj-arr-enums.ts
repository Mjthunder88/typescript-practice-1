// const person: {
//     name: string; //* Type: string
//     age: number; //* Type: number
//     hobbies: string[];  //* Type: Array
//     role: [number, string];  //* Type: Tuple
// } = {
//     name: 'Marcus',
//     age: 23,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// }


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}; // * Type: enum, lets you assign numbers and strings to a value. Will increment when assigned a value. So ADMIN = 5, READ_ONLY = "HELLO", etc...

const person = {
    name: 'Marcus',
    age: 23,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}


console.log(person.name)


for (const hobby of person.hobbies) {
    console.log(hobby)
}