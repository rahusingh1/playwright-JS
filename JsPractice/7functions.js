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

//6. Generator Function:
// function* Yield keyword
function* generateNumberSequence(){
    yield 1;
    yield 6;
    yield 3;
    yield 8;
}

const generator = generateNumberSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// 7. Annonymous function: no specific function name
let numbers = [1,2,3,4,5];
const Numbersquare = numbers.map(function(e){
    return e * e;
});
console.log(Numbersquare);

// OR

const Nsquare = numbers.map((e) => {
    return e * e;
});
console.log(Nsquare);

// 8. Recursive function: a function that calls itself.
function factorial(n){
    if(n === 0 || n ===1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(4));
console.log(factorial(5));


// Higher-Order function
function add(s, t){
    return s + t;
}

function multi(s, t){
    return s * t;
}

function operator(funcName, s, t){
    return funcName(s, t);
}

const s = operator(multi, 8, 5);
console.log(s);

const t = operator(add, 8, 5);
console.log(t);