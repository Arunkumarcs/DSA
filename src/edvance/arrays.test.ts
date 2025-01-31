import { rotateArray, findThreeSum } from "./arrays";

describe("Array operations", () => {
  describe("rotateArray", () => {
    it("should rotate array by n positions", () => {
      expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
      expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
    });

    it("should handle rotation when n equals array length", () => {
      expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
    });

    it("should handle empty array", () => {
      expect(rotateArray([], 2)).toEqual([]);
    });

    it("should handle n greater than array length", () => {
      expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
    });

    it("should handle negative rotation", () => {
      expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
      expect(rotateArray([1, 2, 3, 4], -2)).toEqual([3, 4, 1, 2]);
    });

    it("should handle array with single element", () => {
      expect(rotateArray([1], 5)).toEqual([1]);
    });
  });
});

describe("findThreeSum", () => {
  it("should find three numbers that sum to target", () => {
    expect(findThreeSum([1, 2, 3, 4, 5], 9)).toEqual([2, 3, 4]);
    expect(findThreeSum([2, 4, 6, 8, 10], 18)).toEqual([4, 6, 8]);
  });

  it("should return -1 when no solution exists", () => {
    expect(findThreeSum([1, 2, 3], 10)).toBe(-1);
  });

  it("should return -1 for arrays with less than 3 elements", () => {
    expect(findThreeSum([1, 2], 3)).toBe(-1);
    expect(findThreeSum([1], 1)).toBe(-1);
    expect(findThreeSum([], 0)).toBe(-1);
  });

  it("should handle negative numbers", () => {
    expect(findThreeSum([-1, -2, -3, -4, -5], -9)).toEqual([-2, -3, -4]);
    expect(findThreeSum([-1, 0, 1, 2, 3], 0)).toEqual([-1, 0, 1]);
  });

  it("should handle duplicate numbers", () => {
    expect(findThreeSum([2, 2, 2, 2], 6)).toEqual([2, 2, 2]);
  });

  it("should handle zero target", () => {
    expect(findThreeSum([1, -1, 0, 2, -2], 0)).toEqual([-2, 0, 2]);
  });
});
