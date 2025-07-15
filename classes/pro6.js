class vehical{
    capacity=0;
    vehicle(cap){
        this.capacity=cap
    }
    print(){
        console.log("The capacity of the vehicle is"+this.capacity)
    }
}

class car extends vehical{
    price=0;
    car(cap,price){
        super(cap);
        this.price=price
    }
    print() {
        super.print();
        console.log("The price of the car is"+this.price)
    }
}

let obj=new car(200,100);
obj.print();