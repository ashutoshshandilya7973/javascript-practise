// let cartPrice=[10,20,3,0,40,50];

// let x=cartPrice.reduce((acc,curr)=>{
//     return acc+curr
// },0)

// console.log(x)

//mutability without changing the original objects


const obj={
    name:"ashu",
    class:"mca"
}

const x={...obj,name:"suahni"}
// console.log(x)
// console.log(obj)


const y=[1,5,8,7];
let a=5
const z={...y,a};

console.log(y)
console.log(z)