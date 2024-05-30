// JavaScript is a Dynamic Language, meaning that a variable's type can change during runtime
// The length of an array, as well as the type of objects inside an array, can change during runtime
// The console can be cleared with Ctrl+L
// In JavaScript, all numbers are of type "number". There are no "integers", "floating points", "doubles", etc.
// Bracket Notation allows an object's key-value pair to be selected at runtime by the user



console.log('Hello World'); // Statement in string form

let name = 'Carson'; // Declaring a variable called "name"
console.log(name);

let firstName, lastName, middleName; // Declaring multiple variables on the same line

let yourName = 'John', myName = 'Carson'; // Initializing multiple variables on the same line

const interestRate = 0.3;
console.log(interestRate);

let nameTwo = 'Charlie'; // String Literal
let age = 22; // Number Literal
let isApproved = true; // Boolean Literal
let firstNameTwo = undefined; // typeof is "undefined"
let lastNameTwo = null; // null clears the value of a variable; typeof is "object"



// Objects >

let person = { // Object Literal
    name: 'Carson', // key-value pair
    age: 22 // key-value pair
};

console.log(person);

// Dot Notation to change an object's key-value pair >
person.name = 'Luke';
console.log(person.name);
// < Dot Notation to change an object's kay-value pair

// Bracket Notation to change an object's key-value pair >
let selection = 'name';
person[selection] = 'Rick';
console.log(person['name']);

person['age'] = '15';
console.log(person['age']);
// < Bracket Notation to change an object's key-value pair

// < Objects



// Arrays >
let selectedColors = ['red', 'blue']; // Array Literal
selectedColors[2] = 'green';
selectedColors[3] = 9;

console.log(selectedColors);
console.log(selectedColors[0]);

console.log(selectedColors.length);