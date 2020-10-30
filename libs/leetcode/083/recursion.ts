import ListNode from '../../../types/LinkedList/ListNode';

function walk (slow: ListNode | null, fast: ListNode | null): void {
  if(slow === null) return;

  if (fast === null) {
    slow.next = null;
    return;
  }

  if (slow.val === fast.val) {
    return walk(slow, fast.next)
  }

  slow.next = fast
  slow = fast
  return walk(slow, slow.next)
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  walk(head, head && head.next)
  return head
};
