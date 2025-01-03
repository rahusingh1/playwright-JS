// 1. arrow function with single variable
const numSquare = num => num * num;
const square = numSquare(7);
console.log(square);

// 2. arrow function if there is no variable
const NJS = () => 'Namaste JS';
console.log(NJS());

// 3. function with 2 or more parameters: 
// we need paranthesis if parameters are 2 or more.
const add = (a, b) => a + b;
console.log(add(4, 7));

// 4. use arrow function for objects
const person = {
    firstName: 'Rahul',
    lastName: 'Singh'
}

const getFullName = (p) => `${p.firstName} ${p.lastName}`

const fullName = getFullName(person);
console.log(fullName);


