const { trap } = require("./42.TrappingRainWater");

describe("Trapping Rain Water", () => {
  test("should return correct amount of trapped water for basic cases", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test("should handle edge cases", () => {
    expect(trap([0])).toBe(0);
    expect(trap([1])).toBe(0);
    expect(trap([1, 1])).toBe(0);
    expect(trap([2, 2])).toBe(0);
  });

  test("should handle monotonic arrays", () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0); // Increasing
    expect(trap([5, 4, 3, 2, 1])).toBe(0); // Decreasing
    expect(trap([3, 3, 3, 3])).toBe(0); // Flat
  });

  test("should handle valley patterns", () => {
    expect(trap([3, 1, 4])).toBe(2);
    expect(trap([5, 2, 1, 2, 5])).toBe(10);
    expect(trap([5, 1, 1, 1, 5])).toBe(12);
  });

  test("should handle peak patterns", () => {
    expect(trap([1, 3, 1])).toBe(0);
    expect(trap([2, 5, 2])).toBe(0);
    expect(trap([1, 4, 1, 2, 1])).toBe(1);
  });

  test("should handle complex patterns", () => {
    expect(trap([5, 2, 1, 3, 1, 4, 2])).toBe(9);
    expect(
      trap([
        6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8,
        1, 3,
      ])
    ).toBe(83);
  });
});
