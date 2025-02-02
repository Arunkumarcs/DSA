// 2) Three Sum Problem
// Explanation
// You have an array of integers (possibly containing both positive and negative numbers). The goal is to find all unique triplets (a,b,c)(a, b, c) such that a+b+c=0a + b + c = 0.
// Example:
// Input: [-1, 0, 1, 2, -1, -4]
// Possible unique solutions: [[-1, -1, 2], [-1, 0, 1]]

const threeSumProblem = {
  init(arr, target = 0) {
    let sortedArray = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < sortedArray.length - 2; i++) {
      if (i > 0 && sortedArray[i] == sortedArray[i - 1]) {
        continue;
      }
      let j = i + 1;
      let k = sortedArray.length - 1;

      while (j < k) {
        let obj = { i: sortedArray[i], j: sortedArray[j], k: sortedArray[k] };
        let sum = sortedArray[i] + sortedArray[j] + sortedArray[k];
        if (sum === target) {
          result.push([sortedArray[i], sortedArray[j], sortedArray[k]]);
          j++;
          k--;

          while (j < k && sortedArray[j] === sortedArray[j + 1]) {
            j++;
          }
          while (j < k && sortedArray[k] === sortedArray[k - 1]) {
            k--;
          }
        } else if (sum < target) {
          j++;
        } else {
          k--;
        }
      }
    }
    return result;
  },
};

module.exports = threeSumProblem;
