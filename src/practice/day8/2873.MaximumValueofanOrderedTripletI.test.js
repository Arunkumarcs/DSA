const maxTriplet = require("./2873.MaximumValueofanOrderedTripletI");

describe("2873. Maximum Value of an Ordered Triplet I", () => {
  test("[2,3,1]", () => {
    const nums = [2, 3, 1];
    const result = maxTriplet(nums);
    expect(result).toBe(0);
  });

  test("Example 1", () => {
    const nums = [12, 6, 1, 2, 7];
    const result = maxTriplet(nums);
    expect(result).toBe(77);
  });

  test("Example 1", () => {
    const nums = [12, 6, 1, 2, 7];
    const result = maxTriplet(nums);
    expect(result).toBe(77);
  });

  test("Example 2", () => {
    const nums = [1, 10, 3, 4, 19];
    const result = maxTriplet(nums);
    expect(result).toBe(133);
  });

  test("Example 3", () => {
    const nums = [1, 2, 3];
    const result = maxTriplet(nums);
    expect(result).toBe(0);
  });

  test("All negative values", () => {
    const nums = [-1, -2, -3, -4, -5];
    const result = maxTriplet(nums);
    expect(result).toBe(0);
  });

  test("Single triplet", () => {
    const nums = [5, 1, 3];
    const result = maxTriplet(nums);
    expect(result).toBe(12);
  });

  test("Multiple triplets with same value", () => {
    const nums = [3, 1, 2, 1, 3];
    const result = maxTriplet(nums);
    expect(result).toBe(6);
  });
});
