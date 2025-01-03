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

const getFullName = (p) => `${p.firstName} ${p.lastName}` // OR p => `${p.firstname}` both are same

const fullName = getFullName(person);
console.log(fullName);

// 5. arrow function with default parameters
const greet = (username='Tom', age=2) => `Namaste ${username}! you are ${age} years old.`
const gr = greet();
console.log(gr);

const gr1 = greet("Ravi", 35);
console.log(gr1);

// 6. arrow function with rest parameters also called ... or varargs parameters
const numb = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
const sum = numb(1,2,3,4,5);
console.log(sum);

const getBrowserDetails = (browser='chrome', ...otherDetails) => {
    console.log(`Browser: ${browser}`);
    console.log("Other details: ", otherDetails);
}

getBrowserDetails();
getBrowserDetails('firefox', 'version: 115.56', 'vendor: mozilla');


// 7. max number using Math
const findMax = (a,b,c) => {
    return Math.max(a,b,c);
};

const maxNum = findMax(20, 5, 67);
console.log(maxNum);

