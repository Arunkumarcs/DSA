import {
  binarySearchIterative,
  linearSearch,
  binarySearchRecursive,
  naiveStringSearch,
  jumpSearch,
  interpolationSearch,
  exponentialSearch,
  fibonacciSearch,
  ternarySearch,
  sublistSearch,
} from "./search";

describe("Search Functions", () => {
  describe("binarySearchIterative", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [], target: 1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [1, 2, 3, 4, 5, 6], target: 6 }, expected: 5 },
      { input: { arr: [1, 1, 2, 2, 3, 3], target: 2 }, expected: 2 },
      { input: { arr: [-5, -2, 0, 1, 2], target: -5 }, expected: 0 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(binarySearchIterative(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("linearSearch", () => {
    const testCases = [
      { input: { arr: [3, 1, 4, 1, 5], target: 4 }, expected: 2 },
      { input: { arr: [], target: 1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [5, 4, 3, 2, 1], target: 1 }, expected: 4 },
      { input: { arr: [2, 2, 2, 2], target: 2 }, expected: 0 },
      { input: { arr: [-1, 0, 5, -10], target: -10 }, expected: 3 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(linearSearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("binarySearchRecursive", () => {
    const testCases = [
      {
        input: { arr: [1, 2, 3, 4, 5], target: 3, left: 0, right: 4 },
        expected: 2,
      },
      { input: { arr: [], target: 1, left: 0, right: -1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4, left: 0, right: 2 }, expected: -1 },
      {
        input: { arr: [1, 3, 5, 7, 9], target: 9, left: 0, right: 4 },
        expected: 4,
      },
      {
        input: { arr: [-4, -2, 0, 2, 4], target: -4, left: 0, right: 4 },
        expected: 0,
      },
      {
        input: { arr: [1, 1, 2, 2, 3], target: 2, left: 0, right: 4 },
        expected: 2,
      },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}], target=${input.target}`, () => {
        expect(
          binarySearchRecursive(
            input.arr,
            input.target,
            input.left,
            input.right
          )
        ).toBe(expected);
      });
    });
  });

  describe("naiveStringSearch", () => {
    const testCases = [
      { input: { str: "lorie loled", pattern: "lo" }, expected: 2 },
      { input: { str: "", pattern: "test" }, expected: 0 },
      { input: { str: "test", pattern: "" }, expected: 0 },
      { input: { str: "abc", pattern: "abcd" }, expected: 0 },
      { input: { str: "hello hello hello", pattern: "hello" }, expected: 3 },
      { input: { str: "aaaaa", pattern: "aa" }, expected: 4 },
      { input: { str: "mississippi", pattern: "issi" }, expected: 2 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for str="${input.str}" and pattern="${input.pattern}"`, () => {
        expect(naiveStringSearch(input.str, input.pattern)).toBe(expected);
      });
    });
  });

  describe("jumpSearch", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [], target: 1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [2, 4, 6, 8, 10], target: 8 }, expected: 3 },
      { input: { arr: [-5, -3, -1, 0, 2], target: -5 }, expected: 0 },
      { input: { arr: [1, 1, 1, 1, 1], target: 1 }, expected: 0 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(jumpSearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("interpolationSearch", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [1], target: 1 }, expected: 0 },
      { input: { arr: [1, 1, 1], target: 1 }, expected: 0 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [2, 4, 6, 8, 10, 12], target: 10 }, expected: 4 },
      { input: { arr: [-10, -5, 0, 5, 10], target: -10 }, expected: 0 },
      { input: { arr: [1, 3, 5, 7], target: 0 }, expected: -1 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(interpolationSearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("exponentialSearch", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [], target: 1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [2, 4, 6, 8, 10, 12], target: 12 }, expected: 5 },
      { input: { arr: [-5, -3, -1, 0, 2], target: 2 }, expected: 4 },
      { input: { arr: [1, 1, 2, 2, 3, 3], target: 2 }, expected: 3 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(exponentialSearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("fibonacciSearch", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [], target: 1 }, expected: -1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [2, 4, 6, 8, 10], target: 6 }, expected: 2 },
      { input: { arr: [-10, -5, 0, 5, 10], target: 10 }, expected: 4 },
      { input: { arr: [1, 1, 1, 1, 2], target: 1 }, expected: 1 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(fibonacciSearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("ternarySearch", () => {
    const testCases = [
      { input: { arr: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
      { input: { arr: [1], target: 1 }, expected: 0 },
      { input: { arr: [1, 2], target: 2 }, expected: 1 },
      { input: { arr: [1, 2, 3], target: 4 }, expected: -1 },
      { input: { arr: [2, 4, 6, 8, 10, 12], target: 8 }, expected: 3 },
      { input: { arr: [-5, -3, -1, 0, 2], target: -1 }, expected: 2 },
      { input: { arr: [1, 1, 2, 2, 3, 3], target: 3 }, expected: 4 },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for arr=[${input.arr}] and target=${input.target}`, () => {
        expect(ternarySearch(input.arr, input.target)).toBe(expected);
      });
    });
  });

  describe("sublistSearch", () => {
    const testCases = [
      { input: { list: [1, 2, 3, 4], sublist: [2, 3] }, expected: true },
      { input: { list: [1, 2, 3], sublist: [] }, expected: true },
      { input: { list: [1, 2, 3], sublist: [4, 5] }, expected: false },
      { input: { list: [1, 2], sublist: [1, 2, 3] }, expected: false },
      { input: { list: [1, 2, 3, 2, 3], sublist: [2, 3] }, expected: true },
      { input: { list: [5, 6, 7, 8], sublist: [6, 7, 8] }, expected: true },
      { input: { list: [1, 2, 3, 4, 5], sublist: [2, 4] }, expected: false },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should return ${expected} for list=[${input.list}] and sublist=[${input.sublist}]`, () => {
        expect(sublistSearch(input.list, input.sublist)).toBe(expected);
      });
    });
  });
});
