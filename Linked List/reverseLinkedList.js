/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }


  // solution
  const reverse= (current) => {
    let prev=null  
    while(current){
          let next=current.next; //assigning next from current.next
          current.next=prev; // getting current.next value from prev
          prev=current; //prev for storing current value
          current=next // changing values to next node.
      }
      return prev
  }

console.log(printList(linkedList))
console.log('after reverse')
console.log(printList(reverse(linkedList)))