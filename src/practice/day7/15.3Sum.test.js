const threeSum = require("./15.3Sum");

describe("threeSum", () => {
  test("[-1,0,1,2,-1,-4]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4], 0)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("should find triplets that sum to target", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4], 0)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("should handle array with no valid triplets", () => {
    expect(threeSum([1, 2, 3, 4, 5], 0)).toEqual([]);
  });

  test("should handle array with multiple same triplets but return unique ones", () => {
    expect(threeSum([-1, -1, 0, 0, 2, 2], 0)).toEqual([[-1, -1, 2]]);
  });

  test("should handle empty array", () => {
    expect(threeSum([], 0)).toEqual([]);
  });

  test("should handle array with less than 3 elements", () => {
    expect(threeSum([1, 2], 0)).toEqual([]);
  });

  test("should find triplets for non-zero target", () => {
    expect(threeSum([1, 2, 3, 4, 5], 9)).toEqual([
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });

  test("should handle array with all zeros", () => {
    expect(threeSum([0, 0, 0, 0], 0)).toEqual([[0, 0, 0]]);
  });

  test("should handle array with all negative numbers", () => {
    expect(threeSum([-5, -4, -3, -2, -1], -9)).toEqual([
      [-5, -3, -1],
      [-4, -3, -2],
    ]);
  });

  test("should handle array with mixed numbers", () => {
    expect(threeSum([-2, 0, 1, 1, 2], 0)).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
  });

  test("[0,0,0]", () => {
    expect(threeSum([0, 0, 0], 0)).toEqual([[0, 0, 0]]);
  });
});
