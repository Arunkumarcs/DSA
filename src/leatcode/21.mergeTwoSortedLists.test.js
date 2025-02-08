const { mergeTwoLists } = require("./21.mergeTwoSortedLists");

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

describe("mergeTwoLists", () => {
  test("should merge two sorted lists correctly", () => {
    // Create first list: 1 -> 2 -> 4
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);

    // Create second list: 1 -> 3 -> 4
    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);

    const result = mergeTwoLists(list1, list2);

    // Check merged list: 1 -> 1 -> 2 -> 3 -> 4 -> 4
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(1);
    expect(result.next.next.val).toBe(2);
    expect(result.next.next.next.val).toBe(3);
    expect(result.next.next.next.next.val).toBe(4);
    expect(result.next.next.next.next.next.val).toBe(4);
    expect(result.next.next.next.next.next.next).toBeNull();
  });

  test("should handle empty lists", () => {
    expect(mergeTwoLists(null, null)).toBeNull();

    const list = new ListNode(1);
    const result1 = mergeTwoLists(null, list);
    expect(result1.val).toBe(1);
    expect(result1.next).toBeNull();

    const result2 = mergeTwoLists(list, null);
    expect(result2.val).toBe(1);
    expect(result2.next).toBeNull();
  });

  test("should handle lists of different lengths", () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);

    const list2 = new ListNode(3);

    const result = mergeTwoLists(list1, list2);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(3);
    expect(result.next.next.next).toBeNull();
  });
});
