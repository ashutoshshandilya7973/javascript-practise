class demo{
    constructor(name1){
      this.name1=name1
      this.x=5
    }
     name() {
        console.log(this)
    }
}

const ashu=new demo("ashu")
console.log( ashu.prototype)
ashu.name()