let Task={
    setId:function(Id){
        this.id=Id
    },
    printId:function(){
        console.log("The id of the person is"+this.id)
    }
}
let xyz=Object.create(Task)

xyz.prepareTask=function(Id,label){
    this.setId(Id);
    this.label=label;
}
xyz.showTaskansLabel=function(){
    this.printId();
    console.log("The value of the label in the xyz is"+this.label)
}

xyz.prepareTask("101","ashu");
xyz.showTaskansLabel()