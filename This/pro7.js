// const obj={
//     name:"ashu"
// };

// const obj1=Object.create(obj)
// console.log(obj1.__proto__.__proto__)

Task = {
 setID: function(ID) { this.id = ID; },
 outputID: function() { console.log( this.id ); }
};
// make `XYZ` delegate to `Task`
XYZ = Object.create( Task );

console.log(XYZ)