const maxSubArray = require("./53.MaximumSubarray");

describe("53. Maximum Subarray", () => {
  test("Example 1", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("Example 2", () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test("Example 3", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  test("All negative numbers", () => {
    expect(maxSubArray([-1, -2, -3, -4])).toBe(-1);
  });

  test("Mixed positive and negative numbers", () => {
    expect(maxSubArray([3, -2, 5, -1])).toBe(6);
  });

  test("Single element array", () => {
    expect(maxSubArray([0])).toBe(0);
  });

  test("Large array", () => {
    const largeArray = new Array(100000).fill(1);
    expect(maxSubArray(largeArray)).toBe(100000);
  });
});
