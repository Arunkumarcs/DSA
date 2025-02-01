let factorial = require("./factorial");

describe("factorial", () => {
  describe("usingRecursion", () => {
    test("should calculate factorial of 0", () => {
      expect(factorial.usingRecursion(0)).toBe(1);
    });

    test("should calculate factorial of 1", () => {
      expect(factorial.usingRecursion(1)).toBe(1);
    });

    test("should calculate factorial of positive numbers", () => {
      expect(factorial.usingRecursion(5)).toBe(120);
      expect(factorial.usingRecursion(3)).toBe(6);
      expect(factorial.usingRecursion(7)).toBe(5040);
    });
  });

  describe("usingItration", () => {
    test("should calculate factorial of 0", () => {
      expect(factorial.usingItration(0)).toBe(1);
    });

    test("should calculate factorial of 1", () => {
      expect(factorial.usingItration(1)).toBe(1);
    });

    test("should calculate factorial of positive numbers", () => {
      expect(factorial.usingItration(5)).toBe(120);
      expect(factorial.usingItration(3)).toBe(6);
      expect(factorial.usingItration(7)).toBe(5040);
    });
  });
});
