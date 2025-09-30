// let arr=[1,2,3,4,5];
// arr.length=2
// let x=arr.join("");
// console.log(x)


// Array like objexct;


const ArrayLike={
    0:"ashu",
    1:"Suhani",
    2:"Tannu",
    length:3

}

console.log(Array.prototype.join.call(ArrayLike," Loves "))

//here this things works because the object has an index based key and have length propertt