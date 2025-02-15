const reverseWords = require("./ReverseWords");

describe("Reverse Words Algorithm", () => {
  test("reverses the words in a sentence", () => {
    expect(reverseWords("hello world")).toBe("world hello");
  });

  test("reverses the words in a sentence with multiple words", () => {
    expect(reverseWords("the quick brown fox")).toBe("fox brown quick the");
  });

  test("reverses the words in a sentence with punctuation", () => {
    expect(reverseWords("hello, world!")).toBe("world! hello,");
  });

  test("reverses the words in a single word string", () => {
    expect(reverseWords("hello")).toBe("hello");
  });

  test("reverses the words in an empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  test("reverses the words in a string with multiple spaces", () => {
    expect(reverseWords("hello   world")).toBe("world   hello");
  });
});
