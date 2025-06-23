import { hasDuplicate } from "./duplicate-integer";

describe("Duplicate Integer", () => {
  it("should pass a basic test", () => {
    expect(hasDuplicate([1, 2, 3, 4, 5])).toBe(false);
  });

  it("should pass a basic test", () => {
    expect(hasDuplicate([1, 1, 3, 4, 5])).toBe(true);
  });
});
