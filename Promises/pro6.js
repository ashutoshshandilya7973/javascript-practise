

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("you are reslving the promises ")
    },2000)
})




p1.then((data)=>{
    console.log(data)
}).then(()=>{
    console.log("here eis the second then withot the return data")
}).then(()=>{
    console.log("here is the third then without the return data")
})