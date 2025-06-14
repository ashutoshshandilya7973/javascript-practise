/*step1: Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers. */

let car={
    model:"hero",
    type:"fourWheller",
    isPetrol:true,
    price:200000,
    insurence:false,
    
}

/*. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar*/

let x="color";
car[x]="white";
console.log(car)
console.log()

/*Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase.*/

x="forSale";
car[x]=true;
console.log(car)
console.log();

/*4. Output make and model into the console.*/

console.log(car.model)
