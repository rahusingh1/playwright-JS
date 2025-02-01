// perform the following callback scenario using callback hell

// Start the coffee machine. - 2 secs
// Grind coffee beans. - 1 sec
// Boil water - 1.5 sec
// pour boiling water into a cup - 0.5 sec
// Add ground coffee to the cup - 0.5 sec
// stir the coffee - 0.3 sec 
// enjoy your coffee

function startCoffeeMachine(callback){
    console.log("Starting the coffee machine..");
    setTimeout(function(){
        console.log("Coffee machine is ready.");
        callback("Coffee machine is ready.");
    }, 2000)
};

const grindCoffeeBeans = (callback) =>{
    console.log("Grinding coffee beans started..");
    setTimeout(()=>{
        console.log("Coffee beans are ground");
        callback("ground coffee");
    }, 1000)
};

function boilWater(callback){
    console.log("Start boiling the water");
    setTimeout(()=>{
        console.log("Water is boiled now");
        callback("We have boiled water");
    }, 1500);
}

function pourBoilingWaterToCup(boiledWater, callback){
    console.log("Started pouring the boiled water to cup");
    setTimeout(()=>{
        console.log("boiled water is in cup");
        callback(boiledWater +" in cup");
    }, 500);

}

const addGroundCoffeeToCup = (groundCoffee, callback) =>{
    console.log("start adding ground coffee to the cup");
    setTimeout(()=>{
        console.log("Ground Coffee added to cup");
        callback(groundCoffee + " added to the cup");
    }, 500);
}

const stirCoffee = (coffeeInCup, callback) =>{
    console.log("start stiring the coffee");
    setTimeout(()=>{
        console.log("stirring the coffee");
        callback("coffee stirred in "+ coffeeInCup);
    }, 300);
}

const enjoyCoffee = (coffee) =>{
    console.log("Enjoyed the " + coffee);
    
}

//callback hell
startCoffeeMachine(function (coffeeMachineStatus){
    grindCoffeeBeans(function (groundcoffee){
        boilWater((BoiledWater)=>{
            pourBoilingWaterToCup(BoiledWater, function (waterInCup){
                addGroundCoffeeToCup(groundcoffee, function (coffeeInCup){
                    stirCoffee(coffeeInCup, (coffee)=>{
                        enjoyCoffee(coffee);
                    })
                })
            })
        })
    })
});