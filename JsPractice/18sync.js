// sync vs async behaviour in javascript
// sync code
console.log('Start Sync behaviour');
for(i=0; i<10; i++){
    console.log(i);
}
console.log('End');

// async code
console.log("Start Async behaviour");
// setTimeout is an async function: it is the implementation of the asynchronous behaviour
setTimeout(()=>{
    console.log("2 sec timer -- timeout");
}, 2000);  // 2000ms = 2 sec

console.log("end");
