const rotateArray = require("./rotateAnArrayNTimes");

describe("rotateArray", () => {
  test("should rotate array to the right by given positions", () => {
    expect(rotateArray.init([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(rotateArray.init([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
  });

  test("should rotate array to the left by given positions", () => {
    expect(rotateArray.init([1, 2, 3, 4, 5], 2, "left")).toEqual([
      3, 4, 5, 1, 2,
    ]);
    expect(rotateArray.init([1, 2, 3, 4, 5, 6, 7], 3, "left")).toEqual([
      4, 5, 6, 7, 1, 2, 3,
    ]);
  });

  test("should handle rotation larger than array length", () => {
    expect(rotateArray.init([1, 2, 3], 5)).toEqual([2, 3, 1]);
    expect(rotateArray.init([1, 2, 3, 4], 8)).toEqual([1, 2, 3, 4]);
    expect(rotateArray.init([1, 2, 3], 5, "left")).toEqual([3, 1, 2]);
  });

  test("should handle empty arrays", () => {
    expect(rotateArray.init([], 3)).toEqual([]);
    expect(rotateArray.init([], 3, "left")).toEqual([]);
  });

  test("should handle single element arrays", () => {
    expect(rotateArray.init([1], 5)).toEqual([1]);
    expect(rotateArray.init([1], 5, "left")).toEqual([1]);
  });

  test("should handle zero rotations", () => {
    expect(rotateArray.init([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(rotateArray.init([1, 2, 3], 0, "left")).toEqual([1, 2, 3]);
  });
});
