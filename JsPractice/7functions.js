// there are 9 ways to declare/write the fuctions in js.
// 1. functions declaration
function summation(x, y){
    return x + y;
}
const sum = summation(4, 5);
console.log(sum);

function print(){
    console.log("Namaste, this is JS");
}
print();

// 2. function expression: annonymous function
const multiply = function(a, b){
    return a * b;
}
const mul = multiply(5, 6);
console.log(mul);

// 3. Arrow function expression: annonymous function
const division = (t1, t2) => t1/t2;
const div = division(20,4);
console.log(div);

// 4. function constructor
const subtraction = new Function("c", "d", "return c - d" );
const sub = subtraction(10, 4);
console.log(sub);

// 5. IIFE - Immediatly Invoked Functions Expression
(function(){
    console.log("Server is up and running at port 9090.");
})
();