// Question 2: Print First 10 Even Multiples of 5
// Problem Statement:
// Find and print the first 10 numbers that are both even and multiples of 5.
let evenMultiplesOf5 = {
  init(n = 10) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i * 10);
    }
    return arr;
  },
};

module.exports = evenMultiplesOf5;
