// function ashu(){
//     console.log(this)
// }

// Function.prototype.ashu=ashu;

// function x(){
//      var x=5
// }

// x.ashu();

function ashu(){
    return (
        function x(){
            let x=5;
            let y=6;
            return x+y;
        }
    )
}

let c=ashu();
console.log(c)