// parent of parent (multiple inheritance)
class Automobile{
    constructor(chassisNumber){
        this.chassisNumber = chassisNumber;
    }
    useAerodynamic(){
        console.log("Aerodynamic automobile.");
    }
}


// parent (super class)
class Vehicle extends Automobile{
    constructor(make, model, year){
        super("JSYDSK58687");
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }

    engineStart(){
        console.log(this.make +" engine started");
    }

    engineStop(){
        console.log(this.make +" engine stopped");
    }

}

// child (sub class)
class Car extends Vehicle{
    constructor(make, model, year,propulsion){
        super(make, model, year); // call the parent class constructor - 1
        this.propulsion = propulsion;
    }

    driveCar(){
        console.log("user is driving: " + this.model + ", it is of fuel type: " + this.propulsion);
    }

}

class Truck extends Vehicle{
    constructor(make, model, year, loadCapacity){
        super(make, model, year); // call the parent class constructor - 2
        this.loadCapacity = loadCapacity;
    }

    driveTruck(){
        console.log("driving truck of "+this.make +" having load capacity: " +this.loadCapacity);
    }
}

// creating object(instances) : using new keyword
const car = new Car("Honda", "Amaze", 2021, "Petrol");
console.log(car.getInfo());
car.engineStart();
car.driveCar();
console.log(car.chassisNumber);

const truck = new Truck("Tata", "Sumo", 2022, "500kg");
console.log(truck.getInfo());
truck.engineStart();
truck.driveTruck();
truck.useAerodynamic();
