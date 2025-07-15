// let obj1={
//     name:"ashu",
//     print(){
//         console.log("hlw my name is"+this.name)
//     }

// }

// let obj2={
//     name:"suhani",
//     call1(){
//         obj1.print.call(this)
//     }
// }
// obj2.call1()


let obj3={
    call(){
        this.a=5
    }
}
obj3.call()
console.log(obj3)