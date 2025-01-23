// callback function: it is a function which is passed as argument to another function.
// async call/task --- once this task is completed --- then only callback function will be called.

// basic callback -- without async call 
function greet(name, callback){
    console.log("Hello " + name);// normal/sync step/task - it could be async call or api call
    callback();
}

//callback function
function welcome(){
    console.log("Welcome to team!!");
}

greet("Rahul", welcome);


//callback - with async
function printInfo(naam, callback){
    setTimeout(function(){
        console.log("Printing info for " + naam);
        callback("Plz call me back");
    }, 5000); // 5000ms = 5sec
}

// callback function
function displayMessage(msg){
    console.log(msg);
}

printInfo("Raju", displayMessage);

// example 2 with async call
function fetchUserData(userId, callback){
    setTimeout(function(){
        users = {
            1 : {id:1, name: "rahul"},
            2 : {id:2, name: "ram"}
        }

        const user = users[userId]
        if(user){
            callback(null, user);
        }
        else{
            callback("User Not Found..", null);
        }
    }, 2000);

}

//callback function
function handleUserData(error, user){
    if(error){
        console.log("error: ", error);
    }
    else{
        console.log("user: ", user);
    }
}

fetchUserData(2, handleUserData);
fetchUserData(3, handleUserData);
