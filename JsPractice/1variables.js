// 1. var: old way
// ES6
// var: scope
// functionally/globally + global scope

var x = 10; // global
function test(){
    var y = 20;  // functional/local
}

console.log("Value of x is: " + x);

var top = "Hi JS";
function rel(){
    var pop = "Hello JS"
    console.log("pop: "+pop);
}

rel();  // call the function
console.log("top: "+top);  // global variable accessible
//console.log(pop);  // local variable cannot be accessible


// re-initialization and re-declaration - both are allowed with the var keyword.
var browser = "chrome";
var browser = "firefox";  // decalare variable and initialize it
browser = "edge";  // re-initialize the same variable
console.log("Browser: "+browser);

var g;  // declare but not initialize
console.log(g);  //undefined

g = 'Hello world!!'
console.log(g);

// issue with the var: - variable can be declared & re-initilize multiple times.
var flag = 'Hey rahul!';
var t1 = 4;
if(t1>3){
    var flag = 'Hey tom';  // if condn satisfies then it again initialise the flag with new value.
    // in this case the previous flag value lost.
}
console.log(flag);

// TO overcome the above var issue, now we use let and constant variable.
//let : variable can be declared only once, we can just re-initilize it.
//scope: block scoped - {}

let m = "Hey Anvi";
let time = 4;
if(time > 3){
    let msg = "Hey how r u?";
    console.log(msg);
}
// console.log(msg);  // cannot access out of the block
console.log(m);

let len = 4;
len = 5;
console.log(len);

// const: once declared then cannot change just like final keyword.
const mg = "Hey bro";
// mg = 'hello';  // cannot re-initialize the const variable.
console.log(mg);

const days = 7;
console.log(100 * days);

// const p;  // constant declaration must be initilized

