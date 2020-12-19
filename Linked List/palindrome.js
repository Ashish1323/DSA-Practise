var isPalindrome = function(head) {
    var reverseLinkedList=null;
    var prevcopy=null
    var Ar=[]
    var Br=[]
    while(head){
        Ar.push(head.val)
         var next=head.next;
        head.next=prevcopy
        prevcopy=head
        head=next
    }
    if(Ar.length==1) return true
     while(prevcopy!=null){
        Br.push(prevcopy.val)
        prevcopy=prevcopy.next
    }
    return Ar.toString()===Br.toString()
    
}

// Array Solution
var isPalindrome = function(head) {
  var Ar=[]
    while(head!=null){
        Ar.push(head.val)
        head=head.next
    }
    let j=Ar.length-1
    if(Ar.length==1) return true
    for(let i=0;i<=j;i++,j--){
      if(Ar[i] != Ar[j]) return false   
    }
    return true
};