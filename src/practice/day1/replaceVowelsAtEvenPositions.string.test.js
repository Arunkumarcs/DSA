let replaceVowelsAtEvenPositions = require("./replaceVowelsAtEvenPositions.string");

describe("replaceVowelsAtEvenPositions", () => {
  test("should replace vowels at even positions with *", () => {
    expect(replaceVowelsAtEvenPositions.init("hello")).toBe("h*llo");
    expect(replaceVowelsAtEvenPositions.init("world")).toBe("w*rld");
  });

  test("should handle strings with no vowels at even positions", () => {
    expect(replaceVowelsAtEvenPositions.init("rhythm")).toBe("rhythm");
    expect(replaceVowelsAtEvenPositions.init("cry")).toBe("cry");
  });

  test("should handle strings with all vowels", () => {
    expect(replaceVowelsAtEvenPositions.init("aeiou")).toBe("a*i*u");
    expect(replaceVowelsAtEvenPositions.init("audio")).toBe("a*d*o");
  });

  test("should handle empty strings", () => {
    expect(replaceVowelsAtEvenPositions.init("")).toBe("");
  });

  test("should handle longer sentences", () => {
    expect(replaceVowelsAtEvenPositions.init("the quick brown fox")).toBe(
      "the q*ick brown f*x"
    );
  });

  test("should handle uppercase vowels", () => {
    expect(replaceVowelsAtEvenPositions.init("AeIoU")).toBe("A*I*U");
    expect(replaceVowelsAtEvenPositions.init("HELLO")).toBe("H*LLO");
  });
});
