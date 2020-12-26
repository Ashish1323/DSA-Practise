class Stack{
    constructor(){
        this.array=[]
    }
    push(value){
        var arrayj=this.array.push(value)
    }
}

var loda=new Stack()
loda.push(30)
loda.push(80)
console.log(loda)