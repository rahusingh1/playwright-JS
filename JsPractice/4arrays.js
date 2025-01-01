//declaration of arrays
let myArray = []; // empty array
let number = [1,2,3,4,5] // number array
let fruits = ["apple", "banana", "grapes"];


//Array functions or methods
// 1. push
let lang = ["java", "python", "js"];
lang.push("ruby", "HTML");  // user can push multiple items at a time as well at the last of array.
console.log(lang);

// 2. pop
number.pop();  // remove the last element
console.log(number);

// 3. shift: remove the first element from the array and return it as well.
let firstfruit = fruits.shift();
console.log(firstfruit);
console.log(fruits);

// 4. unshift: adds one or more elements at the beginning.
let colors = ["white", "red", "black"];
console.log(colors.length);
colors.unshift("blue", "Pink");
console.log(colors);
console.log(colors.length);

// 5. splice: it allows to add or remove element at specific index of array.
//array.splice(start,delete no of elements, new element to add at this place)
let animals = ["dog", "cat", "elephant", "goat"];
animals.splice(1, 2, "cow", "buffallo");
console.log(animals);
console.log(animals.length);

// 6. slice: it sliced the array from original array as mentioned start index 
// and size but don't include the last value or end index.
// include first index but exclude the last indezx
// slice(start, end)  -> (]
let pop = [2, 4, 7, 5, 3, 8];
let newpop = pop.slice(1, 4);
console.log(newpop); //4,7,5

// 7. concate(): combine 2  arrays and store in a new array.
let fr = ["apple", "banana", "grapes"];
let num = [1,2,3,4,5];
let newArray = fr.concat(num);
console.log(newArray);

// 8. indexOf: return the first index at which given element is found in the array(first occurance), 
// return -1 if element is not present.
let color = ["white", "red", "black", "red"];
let redIndex = color.indexOf("red");
console.log(redIndex);
let myIndex = color.indexOf("rahul");
console.log(myIndex);

// 2nd red index
let redsecondIndex = color.indexOf("red", color.indexOf("red")+1);
console.log(redsecondIndex);

// 9. includes: whether the array includes the certain element or not, return binary true or false.
let role = ["admin", "seller", "customer", "vendor"];
let flag = role.includes("customer");
console.log(flag);
let flag1 = role.includes("seller","ram");
console.log(flag1);

// 10. forEach: iterating over each element
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
});
