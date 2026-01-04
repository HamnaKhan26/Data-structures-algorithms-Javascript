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