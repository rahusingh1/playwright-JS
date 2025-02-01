// Callback hell vs Promise Chaining

function startCoffeeMachine(){
    return new Promise((resolve)=>{
        console.log("Starting the coffee machine..");
        setTimeout(function(){
        console.log("Machine is ready.");
        resolve("Coffee machine is ready.");
        }, 2000)
    });
};

const grindCoffeeBeans = () =>{
    return new Promise((resolve)=>{
        console.log("Grinding coffee beans started..");
        setTimeout(()=>{
        console.log("Coffee beans are ground");
        resolve("ground coffee");
    }, 1000)
    });
};

function boilWater(){
    return new Promise((resolve)=>{
        console.log("Start boiling the water");
        setTimeout(()=>{
        console.log("Water is boiled now");
        resolve("We have boiled water");
    }, 1500);
    });
}

function pourBoilingWaterToCup(boiledWater){
    return new Promise((resolve)=>{
        console.log("Started pouring the boiled water to cup");
        setTimeout(()=>{
        console.log("boiled water is in cup");
        resolve(boiledWater +" in cup");
    }, 500);
    });
}

const addGroundCoffeeToCup = (groundCoffee) =>{
    return new Promise((resolve)=>{
        console.log("start adding ground coffee to the cup");
        setTimeout(()=>{
        console.log("Ground Coffee added to cup");
        resolve(groundCoffee + " added to the cup");
    }, 500);
    });
}

const stirCoffee = (coffeeInCup) =>{
    return new Promise((resolve)=>{
        console.log("start stiring the coffee");
        setTimeout(()=>{
        console.log("stirring the coffee");
        resolve("coffee stirred in "+ coffeeInCup);
    }, 300);
    });
}

const enjoyCoffee = (coffee) =>{
    console.log("Enjoyed the " + coffee);
    
}

//Promise Chaining
startCoffeeMachine()
    .then((machineStatus)=>{
        console.log(machineStatus);
        return grindCoffeeBeans()
    })
    .then((groundcoffee)=>{
        console.log(groundcoffee);
        return boilWater();

    })
    .then((boiledWater)=>{
        console.log(boiledWater);
        return pourBoilingWaterToCup(boiledWater)
    })
    .then((waterInCup)=>{
        console.log(waterInCup);
        return addGroundCoffeeToCup(waterInCup)
    })
    .then((coffeeInCup)=>{
        console.log(coffeeInCup);
        return stirCoffee(coffeeInCup)
    })
    .then((finalcoffee)=>{
        enjoyCoffee(finalcoffee);
    })
    .catch((err)=>{
        console.log(err)
    })
    