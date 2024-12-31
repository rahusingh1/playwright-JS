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
