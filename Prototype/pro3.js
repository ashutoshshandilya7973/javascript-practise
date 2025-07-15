// If foo exists on a prototype.

// And it's a writable data property (writable: true).

// Then assigning myObject.foo = ... creates a new property foo on myObject, separate from the prototype.

let obj1={
    foo:5,
    x:5
}

let obj2=Object.create(obj1);

obj2.foo=10;

for(let i in obj2){
    console.log(obj2[i])
}