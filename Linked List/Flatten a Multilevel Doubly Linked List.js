class ListNode {
    constructor(val, next = null, prev = null, child = null) {
      this.val = val;
      this.next = next;
      this.prev = prev;
      this.child = child;
    }
  }
  
  // ---- Generate our linked list ----
  const nodes = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
  
  const buildMultiLevel = function(nodes) {
    const head = new ListNode(nodes[0]);
    let currentNode = head;
  
    for(let i = 1; i < nodes.length; i++) {
      const val = nodes[i];
      let nextNode;
  
      if(Array.isArray(val)) {
        nextNode = buildMultiLevel(val);
        currentNode.child = nextNode;
        continue;
      }
  
      nextNode = new ListNode(val);
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
      currentNode = nextNode;
    }
    
    return head;
  }
  
  let multiLinkedList = buildMultiLevel(nodes);
  
  // ---- Generate our linked list ----
  
  const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }
  
  const printList = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    
    printList(head.next);
  }
  

var flatten = function(head) {
    if (!head) return head;
    var currentNode=head
    var childNode=null
    while(currentNode.next!=null){
     if(currentNode.child){
        childNode=currentNode.child
        while(childNode.next!=null){
            childNode=childNode.next
        }
        var nextNode=currentNode.next
        // putting the last node
        // 
        childNode.next=currentNode.next
        if (childNode.next !== null) {
            nextNode.prev=childNode
          }
        // putting the front node
        currentNode.child.prev=currentNode
        currentNode.next=currentNode.child
        //removing the child.
        currentNode.child=null 
     }
     currentNode=currentNode.next
  }
  return head  
};


console.log(printListMulti(multiLinkedList))
console.log('after flatten');
console.log(printList(flatten(multiLinkedList)))

