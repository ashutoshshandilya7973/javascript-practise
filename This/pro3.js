//Here we will see the behaviour of this in implicit binding

function foo() {
 console.log( this.a );
}
var obj2 = {
 
 foo: foo
};
var obj1 = {
 a: 2,
 obj2: obj2
};
obj1.obj2.foo();