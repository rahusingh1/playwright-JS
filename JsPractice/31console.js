// console.log("Hi console!");
// console.error("hello error method");
// console.warn("This is a warning in your code");
// console.info("Info message for you");

const user = {
    name : "Rahul",
    age : 28,
    city : "Mainpuri",
    country : "India"
}

const user1 = {
    name : "Anjali",
    age : 25,
    city : "delhi",
    country : "LA"
}

// console.log(user);
// console.table(user);
console.table({user, user1});

// group
console.group("login feature");
console.log("new feature");
console.log("login");
console.log("username-password");
console.groupEnd();


// time
console.time("Print number 1 to n");
for(let j=1; j<10000; j++){
    console.log(j);
}
console.timeEnd("Print number 1 to n");

// clear
console.log("login");
console.log("login");
console.log("login");
console.log("login");
console.log("login");
console.log("login");
console.clear();

// count
console.count("login");
console.count("login");
console.count("login");
console.count("login4");


// assert
console.assert(10 === 15, "false result");
console.assert(10 === 10, "true result");
const flag = false;
console.assert(flag, "flag has false value");
const flag1 = true;
console.assert(flag1, "flag has true value");

// tracing
function testTrace(){
    console.trace();
}
testTrace();

// coloring
console.log("%c i love my india", 
                "color:red; background-color:lightblue; border:solid");