/** 1. Create a simple object with three items in it.
 2. Using the for in loop, get the properties' names and values from the object 
and output them into the console.
 3. Create an array containing the same three items. Using either the for loop or 
the for in loop, output the values from the array into the console. */

let obj={
    name:"ashu",
    email:"ashutosh@gmail.com",
    age:16
}

for(x in obj){
    console.log(x,":",obj[x])
}
let temp=[]
for(x in obj){
   let temp1=[];
   temp1.push(x);
   temp1.push(obj[x]);
   temp.push(temp1)
}
console.log(temp)