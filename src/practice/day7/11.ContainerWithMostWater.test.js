const { maxArea } = require("./11.ContainerWithMostWater");

describe("Container With Most Water", () => {
  test("should return maximum area of water container can store", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  test("should handle edge cases", () => {
    expect(maxArea([0, 0])).toBe(0);
    expect(maxArea([1, 0])).toBe(0);
    expect(maxArea([10000, 10000])).toBe(10000);
  });

  test("should handle increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
    expect(maxArea([1, 3, 5, 7])).toBe(6);
  });

  test("should handle decreasing heights", () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
    expect(maxArea([7, 5, 3, 1])).toBe(6);
  });

  test("should handle repeated values", () => {
    expect(maxArea([5, 5, 5, 5])).toBe(15);
    expect(maxArea([3, 3, 3, 3, 3])).toBe(12);
  });

  test("should handle alternating values", () => {
    expect(maxArea([1, 8, 1, 8, 1, 8])).toBe(32);
    expect(maxArea([2, 7, 2, 7, 2])).toBe(14);
  });
});
