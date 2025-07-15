let x={
    name:"ashu"
}

console.log(Object.getOwnPropertyDescriptor(x,"name"))
Object.defineProperty(x,"love",{
    value:"i love you suhani",
    writable:true,
    enumerable:true,
    configurable:false
})
console.log(x.love)
Object.defineProperty(x,"love",{
    writable:false,
    enumerable:true,
    // configurable:true
})