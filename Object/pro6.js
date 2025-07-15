let custom={
    [Symbol.iterator]:function(){
        let x=Object.keys(custom);
        let a=0
        return {
            next:function(){
                return {
                    value:custom[x[a++]],
                    done:a>3
                }
            }
        }
    },
    name:"ashu",
    roll:"45",
    class:5,
    
}
for(var a of custom){
    console.log(a)
}