// Question 1: Checking Rotated Palindrome
// Problem Statement:
// You are given a sequence of numbers. When you rotate the paper 180°, the sequence should still appear valid and readable. The validation follows these rules:
// The sequence must contain only specific characters (0, 1, 6, 8, 9). If any other characters are present, return false.
// After rotation, the sequence should match the original with the following transformations:
// 6 transforms into 9 (and vice versa).
// 0, 1, and 8 remain unchanged.

let checkRotatedPalindrome = {
  isValidSequence(arr) {
    const validNumbers = [0, 1, 6, 8, 9];
    for (let i = 0; i < arr.length; i++) {
      if (!validNumbers.includes(arr[i])) {
        return false;
      }
    }
    return true;
  },

  isValidMiddleNumber(arr) {
    let middleIndex = Math.floor(arr.length / 2);
    if (
      arr.length % 2 !== 0 &&
      (arr[middleIndex] === 6 || arr[middleIndex] === 9)
    ) {
      return false;
    }
    return true;
  },

  checkPalindrome(arr) {
    let i = 0;
    let n = arr.length - 1;

    while (i <= n) {
      let iVal = arr[i];

      if (iVal === 6) {
        iVal = 9;
      } else if (iVal === 9) {
        iVal = 6;
      }

      if (iVal !== arr[n]) {
        return false;
      }
      i++;
      n--;
    }

    return true;
  },

  init(arr) {
    if (!this.isValidMiddleNumber(arr)) {
      return false;
    }
    if (!this.isValidSequence(arr)) {
      return false;
    }
    if (arr.length === 1) {
      return true;
    }
    return this.checkPalindrome(arr);
  },
};

module.exports = checkRotatedPalindrome;
