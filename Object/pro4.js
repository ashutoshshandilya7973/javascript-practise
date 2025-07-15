let obj={
    a:5,
    get b(){
        return 2;
    }
}
delete obj.a
Object.defineProperty(obj,"c",{
    get: function(){return this.a*5},
    
    enumerable:true,
    configurable:true
})
console.log(obj.c)
console.log("b" in obj)