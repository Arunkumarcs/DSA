export class ListNode {
  public next: null | ListNode;
  public val: number;

  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
