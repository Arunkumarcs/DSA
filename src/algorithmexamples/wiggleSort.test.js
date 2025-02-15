const wiggleSort = require("./wiggleSort");

describe("wiggleSort", () => {
  test("wiggleSort should sort the array in wiggle pattern", () => {
    expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([3, 5, 1, 6, 2, 4]);
  });

  test("wiggleSort should handle an already wiggle sorted array", () => {
    expect(wiggleSort([1, 6, 2, 5, 3, 4])).toEqual([1, 6, 2, 5, 3, 4]);
  });

  test("wiggleSort should handle an array with all equal elements", () => {
    expect(wiggleSort([4, 4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4, 4]);
  });

  test("wiggleSort should handle an array with two elements", () => {
    expect(wiggleSort([2, 1])).toEqual([1, 2]);
  });

  test("wiggleSort should handle an empty array", () => {
    expect(wiggleSort([])).toEqual([]);
  });

  test("wiggleSort should handle an array with one element", () => {
    expect(wiggleSort([1])).toEqual([1]);
  });
});
