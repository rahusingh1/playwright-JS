// Reverse a number
function reverseNumber(num){
    if(num>=0 && num<=9){
        return num;
    }

    let revNum = 0;
    while(num != 0){
        revNum = revNum * 10 + (num % 10);
        num = Math.floor(num/10);
    }

    return revNum;

}

console.log(reverseNumber(0));
console.log(reverseNumber(8));
console.log(reverseNumber(123));
console.log(reverseNumber(78));
console.log(reverseNumber(6743795990));