let evenMultiplesOf5 = require("./evenMultiplesOf5.array");

describe("evenMultiplesOf5", () => {
  test("should return first 10 even multiples of 5 by default", () => {
    const expected = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(evenMultiplesOf5.init()).toEqual(expected);
  });

  test("should return n even multiples of 5 when n is specified", () => {
    expect(evenMultiplesOf5.init(5)).toEqual([10, 20, 30, 40, 50]);
    expect(evenMultiplesOf5.init(3)).toEqual([10, 20, 30]);
    expect(evenMultiplesOf5.init(1)).toEqual([10]);
  });

  test("should return empty array when n is 0", () => {
    expect(evenMultiplesOf5.init(0)).toEqual([]);
  });

  test("should handle larger values of n", () => {
    const result = evenMultiplesOf5.init(15);
    expect(result).toHaveLength(15);
    expect(result[14]).toBe(150);
  });

  test("should ensure all numbers are even and multiples of 5", () => {
    const result = evenMultiplesOf5.init(7);
    result.forEach((num) => {
      expect(num % 2).toBe(0);
      expect(num % 5).toBe(0);
    });
  });
});
