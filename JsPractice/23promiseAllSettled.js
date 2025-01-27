
// case:
// function1 - resolve
// function2 - reject

const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data returned from getData function");
        }, 1000);
    });
};

const getError = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Data not found in the error function");
        }, 2000);
    });
};


Promise.allSettled([
    getData(),
    getError()
])
.then((results) => {
    console.log("Resolved promises: ", results);
    console.log("----------Modify the output as per our need and show only required data------------------");
    results.forEach(result=>{
        if(result.status === 'fulfilled'){
            console.log("value: "+ result.value);
        }
        else{
            console.log("rejection reason: "+result.reason);
        }
    })
})

