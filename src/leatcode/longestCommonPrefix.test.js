const { longestCommonPrefix } = require("./longestCommonPrefix");

describe("Longest Common Prefix", () => {
  test("should find common prefix in array of similar strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["interstellar", "interview", "interest"])).toBe(
      "inter"
    );
    expect(longestCommonPrefix(["dog", "doggy", "doghouse"])).toBe("dog");
  });

  test("should return empty string when no common prefix exists", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(longestCommonPrefix(["cat", "dog", "rat"])).toBe("");
  });

  test("should handle array with single string", () => {
    expect(longestCommonPrefix(["hello"])).toBe("hello");
    expect(longestCommonPrefix(["a"])).toBe("a");
  });

  test("should handle empty array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  test("should handle array with empty strings", () => {
    expect(longestCommonPrefix(["", "b"])).toBe("");
    expect(longestCommonPrefix(["", ""])).toBe("");
  });
});
