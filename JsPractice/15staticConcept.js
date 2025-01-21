// static variable and functions in javascript
// static variable/function : call it by using class name.
// non-static variable/function : call it by using object reference name.

class Car{
    static wheels = 4;

    constructor(name, model, price, year){
        this.name = name;
        this.model = model;
        this.price = price;
        this.year = year;
    }

    static start(){
        console.log("car -- started");
    }

    drive(){
        console.log(this.name + "is driven by expert driver");
    }
}

const c1 = new Car("Honda", "Elevate", 50000, 2022);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${c1.year}`);
console.log(Car.wheels)
c1.drive();
// c1.start(); // is not a function because it is static and can be accessed by class name only.
Car.start();