// function that returns a resolved promise
const resolvePromise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Resolved!");
        }, 1000);
    });
};

// function that returns a rejected promise
const rejectPromise = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Rejected");
        }, 500);
    });
};

// Use Promise.race() to see which promise settles first
Promise.race([
    resolvePromise(), rejectPromise()
])
.then(result=>{
    console.log("Promise result: ", result);
})
.catch(err => {
    console.log("Error received: ", err);
})




