// Here we have to see the behaviour of default binding and how it works

 function sum(){
    console.log(this)
 }

function add(){
    let x=5;
    Function.sum.call(add)
}
add()