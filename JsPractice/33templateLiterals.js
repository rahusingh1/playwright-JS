// use the backtick in place of single/dobule quotes 
// then use it as - ${varName}

const name = "rahul"
const age = 28

console.log(`my name is ${name} and i am ${age} years old.`);

const multiline = `this is the paragraph
which is not possible with single/dobule quotes
to write paragragh of multiple line 
backtick is very useful.
        thanks`

console.log(multiline);


// mathematical operations

a = 10;
b = 20;
result = `Sum of ${a} and ${b} is ${a+b}`
console.log(result);


// use of variable inside expression
function getXpath(name){
    return `//input[@id='${name}']`
}

const path = getXpath('Tom\'s');  // backslash used as escape character: \
console.log(path);


