import { twoSum } from "./two-integer-sum";

describe("Two Sum", () => {
  it("should pass a basic test", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should fail a basic test", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should fail a basic test fail", () => {
    expect(twoSum([3, 1, 4], 6)).toEqual([]);
  });
});
