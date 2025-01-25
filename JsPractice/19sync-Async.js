// sync behaviour

// fs module is used to read and write files in the file system in JS.
// fs module provides both synchronous as well as asynchronous methods.
// import the fs module and save it in a constant variable fs.
const fs = require('fs');

console.log("start reading a file named test.txt in sync mode");
const content = fs.readFileSync("JsPractice/19test.txt", "utf-8");
console.log(content);
console.log("Done reading a file named test.txt");

// Asynchronous behaviour 
console.log("-----------------------------------");
console.log("start reading the file in async mode");
fs.readFile("JsPractice/19test.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(error);
    }
    console.log(data);
});
console.log("end of code");
