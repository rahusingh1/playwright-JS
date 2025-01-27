function getMessage(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("There is no message for the user");
        }, 200);
    });
}

const getUser = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("User data is available here");
        }, 500);
    });
};

const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Error: Product info could not be fetched");
        }, 1000);
    });
};

Promise.any([
    getMessage(), getUser(), getProducts()
])
.then(result =>{
    console.log("First resolved promise: ", result); // will log the first resolved promise result
})
.catch(error => {
    console.log("All rejected promises: ", error); // will log all rejection reasons if all promises rejects.
})

