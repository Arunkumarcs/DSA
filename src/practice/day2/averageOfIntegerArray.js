// 3) Find the Average of an Integer Array
// Explanation
// Given an array of integers, determine the average value.
//  For example, if the array is [10, 20, 30, 40, 50], the average is 10+20+30+40+50 5=30\frac{10 + 20 + 30 + 40 + 50}{5} = 30.
const averageOfIntegerArray = {
  init(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  },
};

module.exports = averageOfIntegerArray;
