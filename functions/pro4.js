/** 1. Create a variable value with let and assign a string value of 1000 to it.
 2. Create an IIFE function and within this function scope assign a new value to 
a variable of the same name. Within the function, print the local value to the 
console.
 3. Create an IIFE expression, assigning it to a new result variable, and assign 
a new value to a variable of the same name within this scope. Return this 
local value to the result variable and invoke the function. Print the result 
variable, along with the variable name you've been using: what value does it 
contain now?
 [ 137 ]
Functions
 4. Lastly, create an anonymous function that has a parameter. Add logic that 
will assign a passed-in value to the same variable name as the other steps, 
and print it as part of a string sentence. Invoke the function and pass in your 
desired value within the rounded brackets. */

let variable="1000";
(function(){
    variable="2000";
    console.log(variable);

})();

let result=(function(){
   variable="3000";
   return variable;
})();
console.log(result);

const x= function(x){
    console.log(variable, x)
}
x(20);