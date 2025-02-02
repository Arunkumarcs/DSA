const replaceEvenNumbersAtOddIndexes = require("./replaceEvenNumbersAtOddIndexes");

describe("Replace Even Numbers at Odd Indexes", () => {
  test("should replace even numbers at odd indexes with -1", () => {
    expect(replaceEvenNumbersAtOddIndexes.init([4, 6, 8, 2, 5, 10])).toEqual([
      4, -1, 8, -1, 5, -1,
    ]);
  });

  test("should not modify odd numbers at odd indexes", () => {
    expect(replaceEvenNumbersAtOddIndexes.init([1, 3, 5, 7, 9, 11])).toEqual([
      1, 3, 5, 7, 9, 11,
    ]);
  });

  test("should not modify numbers at even indexes", () => {
    expect(replaceEvenNumbersAtOddIndexes.init([2, 5, 4, 7, 6, 9])).toEqual([
      2, 5, 4, 7, 6, 9,
    ]);
  });

  test("should handle array with single element", () => {
    expect(replaceEvenNumbersAtOddIndexes.init([5])).toEqual([5]);
  });

  test("should handle empty array", () => {
    expect(replaceEvenNumbersAtOddIndexes.init([])).toEqual([]);
  });
});
