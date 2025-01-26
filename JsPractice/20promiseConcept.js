// promise concept in js
// setTimeout() method is the asynchronous function in js
const randomNumber  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const randomValue = Math.random();
        if(randomValue > 0.5){
            resolve(randomValue);
        }
        else{
            reject(new Error("value is too loo!!"));
        }
    });
});

randomNumber
    .then(result => { // here then is kind of handler function if promise fulfilled
        console.log("Promise is fulfilled with value: ", result);
    })
    .catch(error =>{ // here catch is kind of handler function if promise rejected
        console.log("Promise is rejected: ", error);
    })