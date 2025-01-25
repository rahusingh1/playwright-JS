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
    .then(result => {
        console.log("Promise is fulfilled with value: ", result);
    })
    .catch(error =>{
        console.log("Promise is rejected: ", error);
    })