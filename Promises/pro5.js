

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("you are reslving the promises ")
    },2000)
})


p1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
    return Promise.resolve(2)

}).then((data)=>{
    console.log(data)
    throw new Error("error in nested then ")
}).catch((err)=>{
    console.log(err)
    return Promise.resolve(5)
}).finally((data)=>{
    console.log("finaaly run ",data)
        return Promise.resolve(5)

}).finally((data)=>{
    console.log("second finalay run ",data)
}).then((data)=>{
    console.log("final then block executed",data)
})