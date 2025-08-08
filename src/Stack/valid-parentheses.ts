export const validParentheses = (s: string) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (const key of s) {
    if (key in Object.keys(map)) {
      stack.push(key);
    } else if (stack.pop() !== key) {
      return false;
    }
  }

  return stack.length === 0;
};
