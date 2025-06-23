import { isAnagram } from "./is-anagram";

describe("Anagram", () => {
  it("should pass a basic test", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("should fail a basic test", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("should fail a basic test", () => {
    expect(isAnagram("rat", "cars")).toBe(false);
  });
});
