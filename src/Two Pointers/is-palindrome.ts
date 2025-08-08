function isAlphaNumeric(char: string) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9") ||
    (char >= "A" && char <= "Z")
  );
}

export const isPalindrome = (s: string) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
