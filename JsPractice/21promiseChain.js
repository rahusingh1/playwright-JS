// Promise chaining concept example
function getEvenNumber(value, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(value % 2 === 0){
                resolve(value);
            }
            else{
                reject(new Error("Value is not an even number, Number was: "+ value));
            }
        });
    });
}

//Promise chain
getEvenNumber(4, 1000)
    .then(result=>{
        console.log("Step1: entered value is an even number: ", result );
        return getEvenNumber(9, 2000)
    })
    .then(result1=>{
        console.log("Step2: entered value is an even number: ", result1 );
    })
    .catch(error=>{
        console.log("Promise rejected with error: ", error.message);
    })