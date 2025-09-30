//polyfills of Promise.AllSettled

function AllSettled(arr){
    const result=[];
    let complete=0
    return new Promise((resolve,reject)=>{
        for(let i=0;i<arr.length;i++){
        arr[i].then((data)=>{
            result[i]=data;
            complete++;
            if(complete===arr.length){
                resolve(result)
            }
        }).catch((err)=>{
            result[i]=err;
            complete++;
            if(complete===arr.length){
                resolve(result)
            }
        })
    }
    })

}




const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(5),1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject(6),2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(7),3000)
})

AllSettled([p1,p2,p3]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("here is error occured in the promise allsettled",err)
})



//allsettled takes array of promise as an parameter 
// return  the arr of settled promise eitherv it is resolve or reject 

// here the catch block does not work
//in result the value is stored as an object {value:value,status:wrkm}