
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


// Function to add two numbers represented by linked lists
const addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0); // Dummy head for the resulting list
    let currentNode = list;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;

        // Add l1's value if present
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        // Add l2's value if present
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // Calculate carry and the current node value
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        // Add new node to the result list
        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;
    }

    return list.next; // Skip the dummy node and return the result
};

// Helper function to convert an array to a linked list
const createLinkedList = (arr) => {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
};

// Helper function to print a linked list
const printLinkedList = (node) => {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
};

// Input: Arrays representing numbers in reverse order
const l1 = createLinkedList([2, 4, 3]); // Represents 342
const l2 = createLinkedList([5, 6, 4]); // Represents 465

// Perform addition
const result = addTwoNumbers(l1, l2);

// Output the result
printLinkedList(result); // Expected Output: 7 -> 0 -> 8 (807)
