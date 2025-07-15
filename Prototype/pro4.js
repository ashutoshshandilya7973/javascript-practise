let obj1={
    name:"ashu"
}
Object.defineProperty(obj1,"x",{
    value:10,
    writable:false,
    enumerable:true
})
Object.defineProperty(obj1,"print",{
    set(value){
        console.log("my name is ashu")
    }
})
let obj2=Object.create(obj1);

Object.defineProperty(obj2,"x",{
    value:85,
    writable:true,
    enumerable:true
})
console.log(obj1.x);
console.log(obj2.x)
obj1.print=10
obj2.print=50
console.log(obj2.print)