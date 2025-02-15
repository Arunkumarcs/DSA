// Reverse String Algorithm
// The Reverse String Algorithm is a fundamental programming algorithm used to reverse the order of characters in a given string. This algorithm is frequently used in various applications, such as data manipulation, text processing, and interview questions for software engineering roles. The primary goal of the algorithm is to develop an efficient and reliable method to reverse the sequence of characters within a string, preserving the original characters and their count, but modifying their positions in the reversed output.

// There are several ways to implement the Reverse String Algorithm, including iterative methods, recursion, and utilizing built-in functions of a programming language. For example, a common iterative method involves initializing two pointers at the beginning and end of the string, then swapping the characters at those positions and moving the pointers toward each other until they meet at the center of the string. Alternatively, the algorithm can be implemented using recursion by breaking down the problem into smaller subproblems, where each subproblem involves reversing a smaller substring until the base case is reached. Some programming languages also offer built-in functions or methods that allow for quick and easy reversal of a string, such as Python's slicing operator or the `reverse()` function in JavaScript. Regardless of the implementation method, the Reverse String Algorithm remains an essential tool in the repertoire of any programmer.

const reverseString = (str) => {
  const strArray = str.split("");

  for (let index = 0; index < strArray.length / 2; index++) {
    [strArray[index], strArray[strArray.length - 1 - index]] = [
      strArray[strArray.length - 1 - index],
      strArray[index],
    ];
  }

  return strArray.join(" ");
};

module.exports = reverseString;