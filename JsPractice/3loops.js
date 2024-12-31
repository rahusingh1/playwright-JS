//for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// for...of loop:   (just like for each loop in java or c#)
console.log('----------');
let array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log('----------');
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// while loop
console.log('----while------');
let p = 1;
while(p<5){
    console.log(p);
    // p++;
    // ++p;
    p=p+1;
}

// print even numbers
console.log('----while------');
let l = 2;
while(l<=10){
    console.log(l);
   
    l=l+2;
}

//do-while loop
console.log('---do-while------');
let h = 2;
do{
    console.log(h);
    h++;
}while(h<2);

//break
// 1 to 100: print hi when you see the multiplication of 5 and break.
console.log('---Break---');
let num = 1;
while(num < 100){
    if(num % 5 == 0){
        console.log("Hi");
        break;
    }
    console.log(num);
    num++;
}

//launch browser using break
console.log('---Launch---');
let Browsers = ["chrome", "firefox", "edge", "IE", "opera"];
for(const e of Browsers){
    if(e == "edge"){
        console.log("launching edge...");
        break;
    }
}

// for...in loop on object
console.log('---for...in---');
const user = {
    name: "rahul singh",
    age: 27,
    city: "Mainpuri"
}
for(const key in user){
    console.log(key +" : "+ user[key]); //user[name]
}

console.log('---for...in---for indexes.');
const br = ["chrome", "firefox", "edge", "IE", "opera"];
for(const ele in br){
    console.log(ele +": "+ br[ele]);
    // console.log(br[ele]);  // to print the element on ele index
}
