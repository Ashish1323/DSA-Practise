class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value){
        if(this.bottom==null){
            var node=new Node(value)
            this.bottom=node
            this.length=1
            this.top=this.bottom
        }else{
        var node=new Node(value)
        this.top.next=node
        this.top=node
        this.length++
    }
}
    pop(){
        var currentNode=this.bottom
        while(currentNode.next!=null){
            var prev=currentNode
            currentNode=currentNode.next
        }
        prev.next=null
        this.top=prev
        this.length--
    }
    isEmpty(){
         return this.bottom==null
    }
  }
  
  const myStack = new Stack();

  myStack.push("Google")
  myStack.push("Udemy")
  myStack.push("Discord")
  myStack.push("Twitter")
  myStack.pop()
console.log(myStack.isEmpty())

  //top
  //(top-1)-> next= null
  //top-2
  //bottom
  
  
  
  
  //Discord
  //Udemy
  //google