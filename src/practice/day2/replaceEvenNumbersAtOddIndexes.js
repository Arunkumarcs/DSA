// 4) Replace Even Numbers at Odd Indexes with -1
// Explanation
// Given an array, for every odd index ii (i.e., i≡1(mod2)i \equiv 1 \pmod{2}), if the element at that index is even, replace it with −1-1. All other elements remain unchanged.
// Example:
// Input: [4, 3, 8, 6, 5, 10, 12, 7]
// Output: [4, 3, 8, -1, 5, -1, 12, 7]

const replaceEvenNumbersAtOddIndexes = {
  init(array) {
    for (let i = 1; i < array.length; i += 2) {
      if (array[i] % 2 === 0) {
        array[i] = -1;
      }
    }
    return array;
  },
};

module.exports = replaceEvenNumbersAtOddIndexes;
