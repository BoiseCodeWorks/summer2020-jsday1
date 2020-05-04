// region Value types
//  NUMBERS +-/* %(remainder) PEMDAS
//  BOOLEAN true/false
//  STRINGS concat/interpolation
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

// region Conditionals 

// if
// General Equality (Type Coersion)
// if ("1" == 1) {
//     console.log('true');
// }
// Strict Equality
// if ("1" === 1) {
//     console.log('true');
// }



// else if
// if (myName == "Jim") {
//     console.log("Hey");
// } else {
//     console.log("Greetings");
// }

// else
// if (myName == "Jim") {
//     console.log("Hey");
// } else if (myName == "Tim") {
//     console.log("Greetings");
// } else {
//     console.log("Wazzaup");
// }

// switch
myName = "Tim"

switch (myName) {
    case "Jim":
        console.log("Hey");
        break;
    case "Jake":
    case "Mark":
        console.log("hello sir");
    case "Tim":
        console.log("Greetings");
        break;
    default:
        console.log("Wazzup");
        break;
}


// Truthy/Falsy
// falsey: 0, "", null, undefined, NaN
// truthy: any non 0 num, strings with content, {}, [], functions 

// endregion

// region Objects

// Defining the object
let me = {
    name: 'Mark',
    prop: "this is the bad prop value",
    hair: {
        color: "Brown",
        length: "Near Mullet"
    }
}
// Add Key
me.age = 31;
// me["age"] = 31
// console.log(me);
// Edit Key
me.age = 32;
// console.log(me);
// Remove Key
delete me.age
// console.log(me)

// bracket notation (allows access to properties through variables)
let prop = "name"
// console.log(me.prop)
// console.log(me[prop])

// Nested objects
// console.log(me.hair.length);

// endregion

// region Arrays
// Arrays start at index 0
Array.prototype.yank = Array.prototype.shift;
Array.prototype.yoink = Array.prototype.pop;
Array.prototype.shove = Array.prototype.push;

let indexes = [0, 1, 2, 3, 4, 5]
console.log(indexes[1]);
console.log(indexes.length);
console.log(indexes[indexes.length - 1]);
// Add to an array
indexes.push(6); // adds to the end of the array
indexes.unshift(-1) // adds to beginning
console.log(indexes)
indexes.pop() // removes from end of array
indexes.shift() // removes from beginning of array






// Bad do not mix datatypes
// let myStuff = [ 1, "hello"]

// endregion