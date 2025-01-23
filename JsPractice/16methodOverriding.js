// method overriding can be done by parent-child relationship
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;

    }
    maxSpeed = 100;
    engineStart(){
        console.log("Car Engine is starting...");
    }
}

class BMW extends Car{
    maxSpeed = 200;
    engineStart(){
        console.log("BMW Engine is starting...");
    }
    engineStop(){
        console.log("BMW Engine is stopping...");
    }
}

let car = new Car("Toyota", "Camry");
console.log(car.maxSpeed);
car.engineStart();


let bmw = new BMW();
console.log(bmw.maxSpeed);
bmw.engineStart();
bmw.engineStop();
