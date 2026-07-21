/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   // 1. Create a dummy node to act as the head anchor
    const dummy = new ListNode(-1);
    
    // 2. Track our current position in the new merged list
    let current = dummy;
    
    // 3. Loop until one of the lists runs out of nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // 4. Append the remaining nodes of the non-empty list
    current.next = list1 !== null ? list1 : list2;
    
    // 5. The merged list starts right after the dummy node
    return dummy.next;  
};