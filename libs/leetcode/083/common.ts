import ListNode from '../../../types/LinkedList/ListNode';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head && head.next
  while (fast !== null && slow !== null) {
    if (fast.val !== slow.val) {
      slow.next = fast
      slow = fast
    }
    fast = fast.next
  }
  slow && (slow.next = null)
  return head
};
