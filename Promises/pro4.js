
Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(resolve)
        .catch(reject);
    }
  });
};





const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(5),4000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>reject(6),2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(7),3000)
})

Promise.race([p1, p2, p3])
  .then((data) => console.log("Winner:", data))
  .catch((err) => console.log("Rejected first:", err));

//here in this the function takes array of promises
// it run through the array and return the first settled promise