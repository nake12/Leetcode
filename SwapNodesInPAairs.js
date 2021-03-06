/**
 * Created by nake12 on 2017/10/3.
 *
 * Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.

 Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next= head;
    var n1 = dummy;
    var n2 = head;

    while(n2 !==null && n2.next!==null) {
        var next = n2.next.next;

        n1.next = n2.next;
        n1.next.next = n2;
        n2.next = next;

        n1 = n2;
        n2= n2.next;
    }

    return dummy.next
};