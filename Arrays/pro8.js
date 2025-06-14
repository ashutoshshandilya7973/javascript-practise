/*1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.*/

let inventory=[];

let item1={
    name:"item1",
    model:"A",
    cost:100,
    quantity:2
}
let item2={
    name:"item2",
    model:"B",
    cost:200,
    quantity:2
}
let item3={
    name:"item3",
    model:"c",
    cost:300,
    quantity:2
}

inventory.push(item1)
inventory.push(item2)
inventory.push(item3)

console.log(inventory);
