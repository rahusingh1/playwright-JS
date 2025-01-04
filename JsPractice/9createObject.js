// there are various ways to define/create an object
// 1. object literals: {} (which are enclosed in curly braces)
const user = {
    name: "Andrew",
    gender: "male",
    age: 28,
    country: "India"
}

console.log(user.name);
console.log(user.age);

// 2. Constructor Function:
function emp(id, name1, profile, salary){
    this.id = id;  // instance variable
    this.name1 = name1;
    this.profile = profile;
    this.salary = salary;
}

const e = new emp(2181, "tom", "qa-enginner", 50000);  // instance of the object using constructor function
const e1 = new emp(1212, "andy", "engineer", 10000);
console.log(e.id + ", " + e.name1 +", "+ e.profile);
console.log(e1.id + ", " + e1.name1 +", "+ e1.profile);

// 3. class style
// when we create the object/instance of the class then the respectice constructor will be called.
// create object with the help of classes
class Customer{
    constructor(naam, product){
        this.naam = naam; // instance variable
        this.product = product;
    }

    AddToCard(){
        console.log(`${this.product} added to your cart.`);
    }
}

//instance/oject of the class
const cust1 = new Customer("naveen", "macbook");  // assign this object to reference variable
console.log(cust1.naam + " "+ cust1.product);
cust1.AddToCard();

// 4. Object.create(): with some Prototype object
const employeePrototype = {
    printInfo:function(){
        console.log(`employee name is ${this.name}`);
    }
};

const d1 = Object.create(employeePrototype); // object is created with the help of prototype
d1.name = "Rahul";
d1.printInfo(); // call the printInfo as it is behaving like a function

// 5. Using factory function: return an object
// allows to create multiple instance of the object
function createDepartment(deptName, hod){
    return{
        deptName: deptName,
        hod: hod,
        getDeptDetails:function(){
            console.log(`you are the part of ${this.deptName} and your hod is ${this.hod}.`);
        }
    }
};

const dept1 = createDepartment("Physics", "Rahul Jain");
const dept2 = createDepartment("Checmistry", "Poonam Pal");
dept1.getDeptDetails();
dept2.getDeptDetails();
console.log(`departments are: ${dept1.deptName}, ${dept2.deptName}`);
