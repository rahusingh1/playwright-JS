// 1. every(): each item/element should met the condn then return true.
let numbers = [1,3,3,4,5];
let flag = numbers.every((e) => e<10);
console.log(flag);

// 2. some(): atleast one element passes the condn.
let fl = numbers.some((e) => e%3===0);
console.log(fl);


// 3. find(): return the first value that satisfy the condn.
let fn = numbers.find((e) => e%2==0);
console.log(fn);

// 4. indexOf(): it returns the index of the element.
let fruits = ["banana", "apple", "papaya", "grapes", "mango", "grapes"];
let fruitIndx = fruits.indexOf("grapes");
console.log(fruitIndx);
let fruitIndx1 = fruits.indexOf("orange");
console.log(fruitIndx1);

// 5. lastIndexOf(): it returns the last index of the element.
let lastIndx = fruits.lastIndexOf("grapes");
console.log(lastIndx);


// 6. reverse(): it reverse any array
let frts = ["banana", "apple", "papaya", "orange", "mango", "grapes"];
let revfruits = frts.reverse();
console.log(revfruits)

// 7. sort(): it sorted the array in alpabetical.
let products = ["imac", "macbook", "windows", "samsung", "123test", "Tshirt"];
let sortlist = products.sort();
console.log(sortlist);


