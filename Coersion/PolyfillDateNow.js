if(!Date.now){
    Date.now=function(){
        return +new Date()
    }
}

console.log(~-5)

let a="45"
if(a=="true"){
    console.log("hello")
}