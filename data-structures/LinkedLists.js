var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);  // Dummy node to simplify the logic
    let current = dummy;           // Pointer to track the merged list

    while (list1 && list2) {         // Traverse both lists
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes if any list is left
    current.next = list1 || list2;

    return dummy.next;  // Return the merged list, skipping the dummy node
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr != null) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

var isPalindrome = function(head) {
    if (!head || !head.next) return true; // Edge case: empty list or single node

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Step 3: Compare the first and second half
    let first = head, second = prev;
    while (second) { // Only need to check second half
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
};


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
    let fast = head;
    let slow = head;

    while(fast && slow && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast == slow) {
            return true;
        }
    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next) {
        if(curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};