// region Value types
//  NUMBERS
//  BOOLEAN
//  STRINGS
//  NULL / UNDEFINED
// endregion

// region Primative Types
//  Objects
//  Arrays
//  Functions
//  NaN
// endregion

// region var, let, const

// var vs let (HOISTING)
// KINDOF OK
// console.log(myName);
// var myName = "Mark"
// console.log(myName);


// NOT OK
// console.log(myName);
// let myName = "Mark"
// console.log(myName);

// let vs const

// // OK
// let x = 7;
// x = 3;

// // NOT OK
// const y =  7;
// y = 9;

// // OK
// const z = { value: 7 };
// z.value = 9;

// endregion

// region Strings

let myName = "Mark";
// let myName2 = new String(myName) Alternate construction of a string from a variable
let greeting = "Hello"

//Concatination
let hello = greeting + " " + myName + ", welcome to the party!"

console.log(hello);

//Interpolation
let hello2 = `${greeting} ${myName}, today is ${Date.now()}`

console.log(hello2);

console.error(greeting, myName);
// endregion