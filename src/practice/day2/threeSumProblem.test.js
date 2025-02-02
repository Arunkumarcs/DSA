const threeSumProblem = require("./threeSumProblem");

describe("threeSumProblem", () => {
  test("should find triplets that sum to target", () => {
    expect(threeSumProblem.init([-1, 0, 1, 2, -1, -4], 0)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("should handle array with no valid triplets", () => {
    expect(threeSumProblem.init([1, 2, 3, 4, 5], 0)).toEqual([]);
  });

  test("should handle array with multiple same triplets but return unique ones", () => {
    expect(threeSumProblem.init([-1, -1, 0, 0, 2, 2], 0)).toEqual([
      [-1, -1, 2],
    ]);
  });

  test("should handle empty array", () => {
    expect(threeSumProblem.init([], 0)).toEqual([]);
  });

  test("should handle array with less than 3 elements", () => {
    expect(threeSumProblem.init([1, 2], 0)).toEqual([]);
  });

  test("should find triplets for non-zero target", () => {
    expect(threeSumProblem.init([1, 2, 3, 4, 5], 9)).toEqual([
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });

  test("should handle array with all zeros", () => {
    expect(threeSumProblem.init([0, 0, 0, 0], 0)).toEqual([[0, 0, 0]]);
  });

  test("should handle array with all negative numbers", () => {
    expect(threeSumProblem.init([-5, -4, -3, -2, -1], -9)).toEqual([
      [-5, -3, -1],
      [-4, -3, -2],
    ]);
  });
});
