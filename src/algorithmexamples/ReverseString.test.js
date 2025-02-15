const reverseString = require("./ReverseString");

test("reverses a simple string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses a string with special characters", () => {
  expect(reverseString("hello!")).toBe("!olleh");
});

test("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a string with numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("reverses a string with mixed characters", () => {
  expect(reverseString("a1b2c3")).toBe("3c2b1a");
});
