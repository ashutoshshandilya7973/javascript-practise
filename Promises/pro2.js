function AllPromise(arr){
     const result=[];
     let completed=0
     return new Promise((resolve,reject)=>{
           for(let i=0;i<arr.length;i++){
                arr[i].then((data)=>{
                    result[i]=data;
                    completed++;
                    if (completed === arr.length) {
                        resolve(result);
                    }
                }).catch((err)=>{
                    reject(err)
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

AllPromise([p1,p2,p3]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("error occured while crating the the polyfills of Promise.All",err)
})


//Promise.All takes array of promise as a parameter 
//return the result of all the promise  in  same order
// if any promise get rejected then the promise is terminated instantly and error is thrown
