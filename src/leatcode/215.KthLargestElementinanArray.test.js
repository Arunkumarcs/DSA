const findKthLargest = require("./215.KthLargestElementinanArray");

describe("findKthLargest", () => {
  test("finds the 1st largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 1)).toBe(6);
  });

  test("finds the 2nd largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test("finds the 3rd largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 3)).toBe(5);
  });

  test("finds the 4th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  test("finds the 5th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 5)).toBe(3);
  });

  test("finds the 6th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 6)).toBe(3);
  });

  test("finds the 7th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 7)).toBe(2);
  });

  test("finds the 8th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 8)).toBe(2);
  });

  test("finds the 9th largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 9)).toBe(1);
  });

  test("finds the largest element in a single-element array", () => {
    expect(findKthLargest([1], 1)).toBe(1);
  });

  test("finds the largest element in a two-element array", () => {
    expect(findKthLargest([1, 2], 1)).toBe(2);
  });

  test("finds the 2nd largest element in a two-element array", () => {
    expect(findKthLargest([1, 2], 2)).toBe(1);
  });

  // We recommend installing an extension to run jest tests.
});
