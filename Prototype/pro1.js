
let sym = Symbol("id")
let obj={
    name:"ashu",
    class:"bac",
    sec:"a",
    [sym]:"wnf",
    

}

let obj2=Object.create(obj)
obj2.roll=5;
obj2[Symbol.iterator]=function(){
    let x=Object.getOwnPropertyDescriptors(obj2)
    let a=0
    return{
        next:function(){
            return{
                value:x[a++],
                done:a>x.length
            }
        }
    }
}
for(var a of obj2){
    console.log(a)
}

