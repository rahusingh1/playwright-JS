// Promise.All() method concept
// Promise.all() method returns a promise that resolves when all of the promises in the array have resolved
// case1:
// function1 - resolve
// function2 - resolve
// function3 - resolve
const function1 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve("Data returned from function1");
            data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 2000);
    });
};

const function2 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data returned from function2");
        }, 2000);
    });
};

const function3 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data returned from function3");
        }, 2000);
    });
};

Promise.all([
    function1(), 
    function2(), 
    function3()
])
.then(dataArray=>{
    console.log("Data returend from all functions: ", dataArray);
})
.catch(error=>{
    console.log("Error occured: ", error);
})


// case2:
// function1 - resolve
// function2 - reject

const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data returned from getData function");
        }, 3000);
    });
};

const getError = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Data not found in the error function");
        }, 2000);
    });
};

Promise.all([
    getData(),
    getError()
])
.then(dataArr=>{
    console.log("data received from promise: ", dataArr);
})
.catch(error=>{
    console.log("Error Occured: ", error);
})