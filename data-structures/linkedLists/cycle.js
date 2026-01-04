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