// 1. map:   number.map((e) => )  here (e) is the callback function.
let number = [1, 2, 3, 4, 5, 6];
let doubleNumber = number.map((e) => e * 2);
console.log(doubleNumber);

// conver Fehrenheit to Celcius
let fehTemp = [32, 68, 86, 104, 212];

//one way
let celTemp1 = fehTemp.map((f) => (f - 32) * (5/9));
console.log(celTemp1);

//Another way
function fehToCel(feh){
    return (feh - 32) * (5/9);
}
let celTemp = fehTemp.map(fehToCel);
console.log(celTemp);

// 2. filter: filter the data from the array.
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((g) => g % 2 === 0);
console.log(evenNum);

// filter the employees based on condn
let employees = [
    {Name: "Rahul Singh", age: 27, gender: "male"},
    {Name: "Priya", age: 26, gender: "female"},
    {Name: "Avtar Singh", age: 45, gender: "male"},
    {Name: "Anjali", age: 32, gender: "female"},
    {Name: "Aish", age: 19, gender: "female"},
];

let femaleEmpOver25 = employees.filter((emp) => {
    return emp.gender == "female" && emp.age > 25;
});
console.log(femaleEmpOver25);

// 3. reduce:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, numb) => acc+numb, 0); //0+1=1, 1+2=3
console.log(sum);

// find the max number from the array using reduce function
let numbArr = [10, 5, 15, 20, 30, 25];
let maxNumber = numbArr.reduce((max, numbr) => {
    if(max>numbr){
        return max;
    }
    else{
        return numbr;
    }
}, numbArr[0]);
console.log(maxNumber);



// Assignment - find the min number in the array by using the reduce.
let minNumber = numbArr.reduce((min, numm) => {
    if(min<numm){
        return min;
    }
    else{
        return numm;
    }
}, numbArr[0]);
console.log(minNumber);

//find the price of cart
let shoppingCart = [
    {product:"Jeans", price: 2000},
    {product:"shirt", price: 1500},
    {product:"shoes", price: 3000},
    {product:"tshirt", price: 700},
    {product:"cap", price: 200},
];

let totalCost = shoppingCart.reduce((total, items) => total+items.price, 0);
console.log(totalCost);