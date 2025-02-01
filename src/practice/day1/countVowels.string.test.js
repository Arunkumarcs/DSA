let countVowels = require("./countVowels.string");

describe("countVowels", () => {
  test("should count vowels in a simple string", () => {
    expect(countVowels.init("hello")).toBe(2);
    expect(countVowels.init("world")).toBe(1);
  });

  test("should handle strings with no vowels", () => {
    expect(countVowels.init("rhythm")).toBe(0);
    expect(countVowels.init("cry")).toBe(0);
  });

  test("should handle strings with all vowels", () => {
    expect(countVowels.init("aeiou")).toBe(5);
    expect(countVowels.init("audio")).toBe(4);
  });

  test("should handle empty strings", () => {
    expect(countVowels.init("")).toBe(0);
  });

  test("should handle longer sentences", () => {
    expect(
      countVowels.init("the quick brown fox jumps over the lazy dog")
    ).toBe(11);
  });

  test("should only count lowercase vowels", () => {
    expect(countVowels.init("AeIoU")).toBe(5);
    expect(countVowels.init("HELLO")).toBe(2);
  });
});
