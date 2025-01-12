// 1. find the unique values
const array = [2,3,1,3,2,3,4,5,3,4,8,3,1,7,7,7];
// spread operator: [...]
// Set() object always maintains the unique value.
const uniqArr = [...new Set(array)];
console.log(uniqArr);

// 2. int to string convert
const num = 30;
const numStr = num + ''; // num converted to string
console.log(numStr+12);
// or
const numStr1 = String(num);
console.log(numStr1+15);

// 3. float to int
const floatNum = 23.56;
const intNum = parseInt(floatNum);
console.log(intNum);

// 4. find the value is number or not
const val = 25.87;
if(typeof val === 'number' && !isNaN(val)){
    console.log(val + " is number.");
}
else{
    console.log(val + " is not a number.");
}

console.log(isNaN(val));

// 5. swap variable values
let n = 10;
let m = 15;
[n, m] = [m, n];
console.log('n: ' + n, ' m: ' + m);

// 6. check if the Object has a property
const person = {
    name: 'Rahul Singh',
    age: 28
}

if(person.hasOwnProperty('gender')){
    console.log('Person has this property.');
}

// 7. Remove falsy values like 0, '', null, undefined, NaN etc.
const values = [0, 1, true, 2, 3, '', null, undefined, false, NaN, 4];
const newVal = values.filter(Boolean);
console.log(newVal);

// 8. string - uppercase, lowercase
const str = "Automation Tester"
const u1 = str.toUpperCase();
const l1 = str.toLowerCase();
console.log(u1);
console.log(l1);

// 9. Check if array contains a specific value.
const a1 = ['python', 'java', 'javascript', 'Ruby'];
if(a1.includes('javascript')){
    console.log('found the searched term');
}
else{
    console.log('searched keyword not found');
}

// 10. check if array is empty
const a2 = [];
if(a2.length === 0){
    console.log('empty array');
}
else{
    console.log('array is not empty');
}

// 11. generate a random number between 2 numbers
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number: ${randomNum}`);


// 12. String to number
const strNum = '32.0';
const x1 = parseFloat(strNum); 
console.log(x1);


// 13. Join array element into a string
const words = ['Hello', 'World'];
const sentence1 = words.join(' ');
const sentence2 = words.join('.');
console.log(sentence1);
console.log(sentence2);


// 14. get object property
const student = {
    name: 'ramu',
    studentId: 344325,
    dob: '26-01-1996'
}
console.log(student['name']);
console.log(student['dob']);

// 15. Clone an array or object
const originalArr = [3,5,2,3,7,5,4,7];
const dupliArr = [...originalArr];  // ... is the spread operator
console.log(dupliArr);

const dupliObj = { ...student }
console.log(dupliObj);

// 16. Convert Object to array:
const employee = {
    name: 'raju',
    empId: 344325,
    dob: '26-01-1996'
}

// a. key array
const keyArray = Object.keys(employee);
console.log(keyArray);

// b. value array
const valueArray = Object.values(employee);
console.log(valueArray);

// c. key-value pair array
const keyValueArray = Object.entries(employee);
console.log(keyValueArray);

// 17. get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString());
console.log(currentDate.toLocaleDateString());

// 18. Check variable is defined
let i;
if(typeof i === 'undefined'){
    console.log('undefined variable');
}

// 19. truncate an array
const fullArray = [0,1,2,3,4,5,6,7,8];
fullArray.length = 5;
console.log(fullArray);


// 20. find the last element of an array
const pop = [4,3,6,3,6, 9, 3, -4, 6, 5.65, 8];
const lastEle = pop.slice(-1);
console.log(lastEle);
