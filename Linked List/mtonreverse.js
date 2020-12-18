class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
}
var reverseBetween = function(head, m, n) {
  let position=1;
  let currentNode=head;            
  var startNode=currentNode
  var tailNode=currentNode
  var prev=null;
  var k=0
  while(position<=n){
      if(position==m-1){
           startNode=currentNode
      }
      if(position==m){
           tailNode=currentNode
      }
      if(position>m-1 && position<n+1){
          var next=currentNode.next
          currentNode.next=prev
          var prev=currentNode
          currentNode=next
          k=1
      }
      position++
      if(k==0) currentNode=currentNode.next
  }  
  startNode.next=prev
  tailNode.next=currentNode

    if(m > 1) {
    return head
  } else {
    return prev;
  }
};



console.log(printList(linkedList))
console.log('after reverse');
//console.log(printList(reverseBetween(linkedList, 2, 4)))
console.log(printList(reverseBetween(linkedList, 1, 1)))