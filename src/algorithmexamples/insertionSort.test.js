const insertionSort = require("./insertionSort");

describe("insertionSort", () => {
  test("sorts an array of numbers", () => {
    expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  test("sorts an already sorted array", () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an array with negative numbers", () => {
    expect(insertionSort([3, -2, -1, 5, 4])).toEqual([-2, -1, 3, 4, 5]);
  });

  test("sorts an array with duplicate numbers", () => {
    expect(insertionSort([4, 5, 3, 4, 2])).toEqual([2, 3, 4, 4, 5]);
  });

  test("sorts an empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });

  test("sorts an array with one element", () => {
    expect(insertionSort([1])).toEqual([1]);
  });
});
