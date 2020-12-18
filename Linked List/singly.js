class linkedList{
    constructor(value){
        this.head={
        value:value,
        next:null
    };
    this.tail=this.head;
    this.length=1;
}
    appende(value){
        const append={
            value:value,
            next: null
        }
        //adress passing to previous node
        this.tail.next=append
        //adding a new node
        this.tail=append
        this.length+=1
    };
    prepend(value){
        const newNode={
            value:value,
            next:this.head //giving the address of current head...
        }
        // changing the head.
        this.head=newNode
        this.length++
    }
    printList(){
        let arr=[]
        let currentNode=this.head;
        while(currentNode != null){
            arr.push(currentNode.value)
            currentNode=currentNode.next
        }
        return arr
    }
    insert(index,value){
        const newNode={
            value:value,
            next:null
        }
        
        let currentNode=this.head;
        let previousNode=this.head;
        let  i=0
        while(i!=index){
            i++
            // if(i<index){ // run index till index-1 for getting the previous node...
            //     previousNode=previousNode.next
            // }
            previousNode=currentNode
            currentNode=currentNode.next
        }
        previousNode.next=newNode;
        newNode.next=currentNode;
    }
    delete(index){
        let currentNode=this.head;
        let previousNode=this.head;
        let  i=0
        while(i!=index){
            i++
            previousNode=currentNode
            currentNode=currentNode.next
        }
        previousNode.next=currentNode.next;
        previousNode.length--
    }
}

let Lodu= new linkedList(10)
 Lodu.appende(90)
 Lodu.appende(900)
 Lodu.appende(9700)
 Lodu.prepend(4)
 Lodu.insert(3,901)
 Lodu.insert(4,902)
 Lodu.delete(4)
 console.log(Lodu.printList())
//console.log(Lodu)