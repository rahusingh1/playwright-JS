// destructuring of array/objects ---> variables
// Array
const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const lang = ["java", "javascript", "Ruby", "Python", "Go"];
const [p, q, ...testLang] = lang;
console.log(p);
console.log(q);
console.log(testLang);


// Object
const user = {
    firstName: "rahul",
    lastName: "singh",
    age: 29
}

const {firstName, lastName, city='mainpuri', age} = user;

console.log(firstName, lastName, age, city);

// function parameters:
// without destructuring
function getUserInfo(person){
    console.log(person.firstName + ' ' + person.lastName);
}

const person = {
    firstName: "tom",
    lastName: "holland",
}

getUserInfo(person);

// with destructuring
function getInfo({firstName, lastName}){
    console.log(firstName, lastName)
    console.log(lastName);
}

getInfo(person);

// array as function parameters
function arr([s, t, u]){
    console.log(s);
    console.log(t);
    console.log(u);
}

const ar = [3, 4, 5, 6];

arr(ar);






