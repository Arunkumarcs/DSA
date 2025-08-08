import { ListNode } from "./linkList";

export const reverseALinkedList = (head: ListNode) => {
  let previous = null;
  let current = head;

  while (current.next) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
};
