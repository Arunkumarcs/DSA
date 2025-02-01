// 1) Rotate an Array n Number of Times
// Explanation
// You are given an array of integers and a number n. The task is to rotate the array to the right by n positions. For example:
// Original Array: [1, 2, 3, 4, 5, 6, 7]
// Rotate by 3: [5, 6, 7, 1, 2, 3, 4]
const rotateArray = {
  reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  },

  init(arr, n) {
    let newRotaion = arr.length > n ? n : n % arr.length;

    this.reverse(arr, 0, arr.length - 1);
    this.reverse(arr, 0, newRotaion - 1);
    this.reverse(arr, newRotaion, arr.length - 1);
    return arr;
  },
};

module.exports = rotateArray;
