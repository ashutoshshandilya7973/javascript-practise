const obj={
    name:"ashu",
    age:8
}
console.log(obj)


const newObj=Object.create(obj);

console.log(newObj.__proto__)