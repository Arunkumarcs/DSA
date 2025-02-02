const averageOfIntegerArray = require("./averageOfIntegerArray");

describe("Average of Integer Array", () => {
  test("should return the average of positive integers", () => {
    expect(averageOfIntegerArray.init([1, 2, 3, 4, 5])).toBe(3);
  });

  test("should return the average of negative integers", () => {
    expect(averageOfIntegerArray.init([-1, -2, -3, -4, -5])).toBe(-3);
  });

  test("should return the average of mixed positive and negative integers", () => {
    expect(averageOfIntegerArray.init([-2, -1, 0, 1, 2])).toBe(0);
  });

  test("should return the correct average with decimal result", () => {
    expect(averageOfIntegerArray.init([1, 2, 4])).toBe(2.3333333333333335);
  });

  test("should handle array with single element", () => {
    expect(averageOfIntegerArray.init([5])).toBe(5);
  });
});
