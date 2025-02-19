/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode | null}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null;

    let a = headA;
    let b = headB;

    // Traverse both lists
    while (a !== b) {
        // If a reaches end, go to head of list B, else continue
        a = a === null ? headB : a.next;
        // If b reaches end, go to head of list A, else continue
        b = b === null ? headA : b.next;
    }

    // If there's an intersection, a and b will be at the intersection node
    // If no intersection, both will be null
    return a;
};
