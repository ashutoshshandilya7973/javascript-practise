const red=document.querySelector('.red')
const pink=document.querySelector('.pink')
const blue=document.querySelector(".blue")
const green=document.querySelector('.green')


red.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("red click")
})

pink.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("pink click")
},true)

blue.addEventListener("click",function(){
    console.log("blue click")
})

green.addEventListener("click",function(){
    console.log("green click")
},true)


