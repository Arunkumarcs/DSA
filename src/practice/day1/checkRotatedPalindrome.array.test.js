let checkRotatedPalindrome = require("./checkRotatedPalindrome.array");

describe("checkRotatedPalindrome", () => {
  test("should return true for valid rotated palindrome sequences", () => {
    expect(checkRotatedPalindrome.init([6, 9])).toBe(true);
    expect(checkRotatedPalindrome.init([1, 6, 9, 1])).toBe(true);
    expect(checkRotatedPalindrome.init([8, 8, 8])).toBe(true);
    expect(checkRotatedPalindrome.init([0, 1, 8, 1, 0])).toBe(true);
    expect(checkRotatedPalindrome.init([6, 8, 8, 9])).toBe(true);
    expect(checkRotatedPalindrome.init([1, 0, 8, 0, 1])).toBe(true);
  });

  test("should return false for invalid sequences with wrong numbers", () => {
    expect(checkRotatedPalindrome.init([2, 3])).toBe(false);
    expect(checkRotatedPalindrome.init([1, 4, 7])).toBe(false);
    expect(checkRotatedPalindrome.init([5])).toBe(false);
    expect(checkRotatedPalindrome.init([2])).toBe(false);
    expect(checkRotatedPalindrome.init([1, 2, 3, 4])).toBe(false);
    expect(checkRotatedPalindrome.init([7, 8, 9])).toBe(false);
  });

  test("should return false for non-palindrome sequences", () => {
    expect(checkRotatedPalindrome.init([6, 8])).toBe(false);
    expect(checkRotatedPalindrome.init([1, 6, 8, 9])).toBe(false);
    expect(checkRotatedPalindrome.init([9, 8, 6])).toBe(true);
    expect(checkRotatedPalindrome.init([8, 6, 9])).toBe(false);
    expect(checkRotatedPalindrome.init([1, 8, 6, 0])).toBe(false);
  });

  test("should handle single digit cases correctly", () => {
    expect(checkRotatedPalindrome.init([0])).toBe(true);
    expect(checkRotatedPalindrome.init([1])).toBe(true);
    expect(checkRotatedPalindrome.init([8])).toBe(true);
    expect(checkRotatedPalindrome.init([6])).toBe(false);
    expect(checkRotatedPalindrome.init([9])).toBe(false);
  });

  test("should validate middle numbers in odd-length sequences", () => {
    expect(checkRotatedPalindrome.init([1, 6, 1])).toBe(false);
    expect(checkRotatedPalindrome.init([8, 0, 8])).toBe(true);
    expect(checkRotatedPalindrome.init([9, 8, 6])).toBe(true);
    expect(checkRotatedPalindrome.init([1, 9, 1])).toBe(false);
    expect(checkRotatedPalindrome.init([8, 1, 8])).toBe(true);
  });

  test("should handle empty arrays", () => {
    expect(checkRotatedPalindrome.init([])).toBe(true);
  });

  test("should handle longer sequences", () => {
    expect(checkRotatedPalindrome.init([6, 1, 8, 8, 1, 9])).toBe(true);
    expect(checkRotatedPalindrome.init([9, 0, 8, 8, 0, 6])).toBe(true);
    expect(checkRotatedPalindrome.init([1, 6, 8, 8, 9, 1])).toBe(true);
    expect(checkRotatedPalindrome.init([6, 1, 0, 8, 0, 1, 9])).toBe(true);
  });
});
