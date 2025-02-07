const { isValid } = require("./validParentheses");

describe("Valid Parentheses", () => {
  test("should validate simple matching parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("[]")).toBe(true);
    expect(isValid("{}")).toBe(true);
  });

  test("should validate multiple matching parentheses", () => {
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("([])")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  test("should reject mismatched parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}")).toBe(false);
  });

  test("should reject incomplete parentheses", () => {
    expect(isValid("(")).toBe(false);
    expect(isValid("]")).toBe(false);
    expect(isValid("((")).toBe(false);
    expect(isValid("((]")).toBe(false);
  });

  test("should handle empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test("should validate nested parentheses", () => {
    expect(isValid("({[]})")).toBe(true);
    expect(isValid("((()))")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
  });
});
