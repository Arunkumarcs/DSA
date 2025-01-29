import { linearSearch } from "./linear.search";

describe("Linear Search", () => {
  test("should find element in array", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = linearSearch(arr, target);
    expect(result).toBe(2); // index of target element
  });
});
