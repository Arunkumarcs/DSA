class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(list) {
  const head = new ListNode(list[0]);
  let link = head;
  for (let index = 1; index < list.length; index++) {
    link.next = new ListNode(list[index]);
    link = link.next;
  }
  return head;
}

function reverseLinkedList(linkedList) {
  let pre = null;
  let current = linkedList;

  while (current) {
    let temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }

  return pre;
}

const list = [0, 1, 2, 3];
const linkedNew = createLinkedList(list);
console.log(JSON.stringify(reverseLinkedList(linkedNew)));
