const { romanToInteger } = require("./romanToInteger");

describe("Roman to Integer", () => {
  test("should convert basic roman numerals correctly", () => {
    expect(romanToInteger("III")).toBe(3);
    expect(romanToInteger("IV")).toBe(4);
    expect(romanToInteger("IX")).toBe(9);
    expect(romanToInteger("LVIII")).toBe(58);
  });

  test("should handle complex roman numerals correctly", () => {
    expect(romanToInteger("MCMXCIV")).toBe(1994);
    expect(romanToInteger("CMXCIX")).toBe(999);
    expect(romanToInteger("MMMCMXCIX")).toBe(3999);
  });

  test("should handle single roman numerals", () => {
    expect(romanToInteger("I")).toBe(1);
    expect(romanToInteger("V")).toBe(5);
    expect(romanToInteger("X")).toBe(10);
    expect(romanToInteger("L")).toBe(50);
    expect(romanToInteger("C")).toBe(100);
    expect(romanToInteger("D")).toBe(500);
    expect(romanToInteger("M")).toBe(1000);
  });

  test("should handle repeated roman numerals", () => {
    expect(romanToInteger("II")).toBe(2);
    expect(romanToInteger("XX")).toBe(20);
    expect(romanToInteger("CC")).toBe(200);
    expect(romanToInteger("MM")).toBe(2000);
  });
});
