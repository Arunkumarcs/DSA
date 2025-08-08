import { isPalindrome } from "./is-palindrome";

describe("isPalindrome", () => {
  it("should return true for valid palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should return false for invalid palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
});
