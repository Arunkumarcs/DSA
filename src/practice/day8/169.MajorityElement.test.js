const majorityElement = require("./169.MajorityElement");

describe("169. Majority Element", () => {
  test("Example 1", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  test("Example 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test("Single element array", () => {
    expect(majorityElement([1])).toBe(1);
  });

  test("All elements are the same", () => {
    expect(majorityElement([5, 5, 5, 5, 5])).toBe(5);
  });

  test("Majority element at the end", () => {
    expect(majorityElement([1, 2, 3, 4, 4, 4, 4])).toBe(4);
  });

  test("Majority element at the beginning", () => {
    expect(majorityElement([6, 6, 6, 6, 1, 2, 3])).toBe(6);
  });

  test("Large array with majority element", () => {
    const largeArray = new Array(50000)
      .fill(7)
      .concat(new Array(49999).fill(8));
    expect(majorityElement(largeArray)).toBe(7);
  });
});
