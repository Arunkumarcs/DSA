const {
  isValidAnagramType1,
  isValidAnagramType2,
} = require("./isValidAnagram");

describe("isValidAnagramType1", () => {
  test("should return true for valid anagrams", () => {
    expect(isValidAnagramType1("anagram", "nagaram")).toBe(true);
    expect(isValidAnagramType1("silent", "listen")).toBe(true);
    expect(isValidAnagramType1("", "")).toBe(true);
  });

  test("should return false for invalid anagrams", () => {
    expect(isValidAnagramType1("rat", "car")).toBe(false);
    expect(isValidAnagramType1("hello", "world")).toBe(false);
    expect(isValidAnagramType1("hello", "hello ")).toBe(false);
  });
});

describe("isValidAnagramType2", () => {
  test("should return true for valid anagrams", () => {
    expect(isValidAnagramType2("anagram", "nagaram")).toBe(true);
    expect(isValidAnagramType2("silent", "listen")).toBe(true);
    expect(isValidAnagramType2("", "")).toBe(true);
  });

  test("should return false for invalid anagrams", () => {
    expect(isValidAnagramType2("rat", "car")).toBe(false);
    expect(isValidAnagramType2("hello", "world")).toBe(false);
    expect(isValidAnagramType2("hello", "hello ")).toBe(false);
  });
});
