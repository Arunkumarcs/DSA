// Question 5: Find Factorial Using Iteration and Recursion
// Problem Statement:
// Find the factorial of a given number using both iterative and recursive methods.
const factorial = {
  usingRecursion(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * this.usingRecursion(num - 1);
  },

  usingItration(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  },
};

module.exports = factorial;
