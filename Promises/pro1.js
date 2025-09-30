
function validate(id){
    if(id>=0){
        return true
    }
    return false
}

function createOrder(id){
    
    const promise=new Promise((resolve,reject)=>{
            
        if(!validate(id)){
            const err=new Error("the id is not validated")
            reject(err)
        }
        const orderId=12345;
        if(orderId){
            resolve(orderId)
        }

    })
    return promise;

}

const x=createOrder(-5);

x.then((data)=>{
    console.log(data)
},(err)=>{
    console.log("here is error occured in the code ")
})