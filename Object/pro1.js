let obj={
    name:"ashu",
    getFn:function(){
        console.log("hello i am "+this.name);
    }
}
let obj2={
      name:"saurabh"
}

// obj.getFn.call(obj2);

// console.log(this)


// so technically we can pull out the function from the object as well 

const x=obj.getFn;
x()