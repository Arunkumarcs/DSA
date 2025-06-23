import { anagramGroups } from "./anagram-groups";

describe("anagramGroups", () => {
  it("should group anagrams correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = anagramGroups(input);
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    expect(output).toEqual(expected);
  });
});
