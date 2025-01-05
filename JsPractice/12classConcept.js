class car{
    constructor(name, model, color, price){
        this.name = name;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    // constructor overloading not allowed, it will through a syntax error during run time.
    // constructor(name){
    //     this.name = name;
    // }

    refuel(){
        console.log(this.name +" car is refueled.");
    }
}

const c1 = new car("BMW","Q7","Black",50000);

console.log(c1.name +", "+ c1.model +", "+ c1.color +", "+c1.price);
c1.refuel();

const c2 = new car("Audi","A6","white",40000);

console.log(c2.name +", "+ c2.model +", "+ c2.color +", "+c2.price);
c2.refuel();

const c3 = new car("Maruti Suzuki");

console.log(c3.name +", "+ c3.model +", "+ c3.color +", "+c3.price);
