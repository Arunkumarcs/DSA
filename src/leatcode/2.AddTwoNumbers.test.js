const { addTwoNumbers, ListNode } = require("./2.AddTwoNumbers");

function createLinkedList(arr) {
  if (!arr.length) return null;
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe("Add Two Numbers", () => {
  test("should add two numbers correctly", () => {
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 8]);
  });

  test("should handle numbers with different lengths", () => {
    const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createLinkedList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test("should handle zero values", () => {
    const l1 = createLinkedList([0]);
    const l2 = createLinkedList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0]);
  });

  test("should handle carry over through multiple digits", () => {
    const l1 = createLinkedList([9, 9, 9]);
    const l2 = createLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 0, 0, 1]);
  });

  test("should handle single digit with carry", () => {
    const l1 = createLinkedList([5]);
    const l2 = createLinkedList([5]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 1]);
  });
});
