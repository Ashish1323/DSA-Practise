/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var currentNode=head;
    var setNode= new Set();
    while(currentNode != null){
        if(setNode.has(currentNode)){
            return true
        }
        setNode.add(currentNode)
        currentNode=currentNode.next
    }
    return false
};