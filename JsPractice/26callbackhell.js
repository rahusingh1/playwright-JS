// pyramid of doom or callback hell
asyncFunction1((result1) => {
    asyncFunction2(result1, (result2)=>{
        asyncFunction3(result2, (result3)=>{
            // more nested callbacks
        });
    });
});


// better readability with promises:
asyncFunction1()
    .then((result1) => asyncFunction2(result1))
    .then((result2) => asyncFunction3(result2))
    .then((result3) => asyncFunction4(result3))
    .then(result4 => {
        // code here
    })
    .catch((err) => {
        // Error handing
    });

    
// or using async-await: 
async function myFunction() {
    try{
        const result1 = await asyncFunction1();
        const result2 = await asyncFunction1(result1);
        const result3 = await asyncFunction1(result2);
        // code here
    }
    catch (error) {
        // Error Handling
    }
}