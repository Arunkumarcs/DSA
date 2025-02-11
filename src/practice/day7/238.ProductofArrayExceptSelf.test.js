const { productExceptSelf } = require("./238.ProductofArrayExceptSelf");

describe("Product of Array Except Self", () => {
  test("should return correct products for basic cases", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
  });

  test("should handle arrays with ones", () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    expect(productExceptSelf([1, 2, 1, 4])).toEqual([8, 4, 8, 2]);
  });

  test("should handle arrays with zeros", () => {
    expect(productExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
    expect(productExceptSelf([0, 0, 2, 3])).toEqual([0, 0, 0, 0]);
  });

  test("should handle arrays with negative numbers", () => {
    expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6]);
    expect(productExceptSelf([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6]);
  });

  test("should handle minimum length array", () => {
    expect(productExceptSelf([3, 4])).toEqual([4, 3]);
    expect(productExceptSelf([-2, 5])).toEqual([5, -2]);
  });
});
