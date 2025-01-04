// Method overloading is not possible in JS because it is an interpreted language but overloading happened at run time.
//During run time interpreter check and if there are multiple methods with the same name then 
// it called the last written method and skip the previous methods.

function print(){
    console.log("Namaste");
}
print();

function print(name){
    console.log("Namaste, "+name);
}
print("rahul");

function print(name, age){
    console.log("Namaste, "+name +" age: "+age);
}

print("nehit", 30);


// run test cases on remote machine
// needed browserName, browserVersion, remoteExecution

function getBrowserDetails(browserName, browserVersion, remoteExecution){
    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){
        console.log(`Browser: ${browserName}, Version: ${browserVersion}, Remote Execution: ${remoteExecution}`);
    }
    else if(typeof browserVersion === 'number'){
        console.log(`Browser: ${browserName}, Version: ${browserVersion}`);
    }
    else{
        console.log(`Browser: ${browserName}`);
    }
}

getBrowserDetails("firefox");
getBrowserDetails("edge", 115.412);
getBrowserDetails("chrome", 115.412, true);