if (!Function.prototype.softBind) {
 Function.prototype.softBind = function(obj) {
 var fn = this;
 // capture any curried parameters
 var curried = [].slice.call( arguments, 1 );
 var bound = function() {
 return fn.apply(
 (!this || this === ( global)) ?
 obj : this,
 curried.concat.apply( curried, arguments )
 );
 };
 bound.prototype = Object.create( fn.prototype );
 return bound;
 };
}
function ashu(){
    console.log(this.name)
}

let obj={
    name:"ashu"
}
let obj2={
    name:"suhani"
}
let x=ashu.softBind(obj)
x.call(obj2)