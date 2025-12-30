function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}
var middleNode = function(head) {
     let slow=head,fast=head;
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
}
        return slow;
    };
    function listToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
const head = arrayToList([1, 2, 3, 4, 5, 6]);
const middle = middleNode(head);
console.log(listToArray(middle));
