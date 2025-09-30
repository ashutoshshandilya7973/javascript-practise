// function createStudent(name,age){
//     const obj={}
//     obj.name=name;
//     obj.age=age
//     obj.checkAge=function(){
//         return age>18
//     }
//     return obj
// }
// console.dir(createStudent)
// const stu1=createStudent("ashutosh",20)
// const stu2=createStudent("suhani",12)
// console.log(stu1)
// console.log(stu2)

//-----------some demo for myself

function ashu(name,age){
  name=name;
  age=age
}
ashu.prototype.love=function(){
    console.log("love")
}

function chota(){
   let x=8;
}
chota.prototype=Object.create(ashu.prototype)
chota.prototype.constructor=chota
const p2=new chota()
console.log(p2)




//----------some demo

// function ashu(name,age){
//     let obj={}
//     obj.name=name;
//     obj.age=age;
//     return obj
// }

// const p1=ashu("ashu",18);
// console.log(p1)




//-----------Another better example

// const ageCheck={
//     sex:"male",
//     checkAge:function(){
//         return this.age>16
//     }
// }
// function createStudent(name,age){
//     const obj=Object.create(ageCheck)
//     obj.name=name
//     obj.age=age
//     return obj
// }

// const p1=createStudent("ashu",18)
// console.log(p1.checkAge())

