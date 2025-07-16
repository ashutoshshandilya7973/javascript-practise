class Vehicle {
    constructor(cap) {
        this.capacity = cap;
    }

    print() {
        console.log("The capacity of the vehicle is " + this.capacity);
    }
}

class Car extends Vehicle {
    constructor(cap, price) {
        super(cap); // 
        this.price = price;
    }

    print() {
        super.print(); 
        console.log("The price of the car is " + this.price);
    }
}

let obj = new Car(200, 100);
obj.print();
