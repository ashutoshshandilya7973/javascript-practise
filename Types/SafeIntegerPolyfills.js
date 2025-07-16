let isInteger=function(a){
    return (typeof a === "number"&& a%1===0)
}

let isSafeInteger=function(num){
    return (isInteger(num)&&Math.abs(num)<Number.MAX_SAFE_INTEGER)
}


console.log(isSafeInteger(99999999999))
let a=5
console.log(void a)

console.log(setTimeout(() => {}, 100)); // Might log: 1
