// Async function without await:
async function f1(){
    console.log("This is an async function with resolved promise");
    return 42; // return a promise(resolved) on top of 42
}

f1()
.then(result =>{
    console.log(result);
})

// async function without await but with error:
async function f2(){
    console.log("This is a async function with rejected promise");
    throw new Error("you got an error"); // return a promise(rejected)
}

f2()
.catch(err =>{
    // console.log(err.message);
    console.log(`error msg: ${err}`);
})

// async function with resolved or rejected promise without async keyword
console.log("-----------------");
function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumber = Math.random();
        setTimeout(()=>{
            if(randomNumber < 0.5){
                resolve(randomNumber);
            }
            else{
                reject(new Error("number is greater than 0.5"));
            }

        }, 2000);
    }) 
}

// async function which is calling getInfo() function

async function getNumberInfo(){
    try{
        const num = await getInfo(); // async steps
        console.log("Random Number: " + num);
    }
    catch(error){
        console.log("Error: ", error);
    }
    
}

getNumberInfo();
