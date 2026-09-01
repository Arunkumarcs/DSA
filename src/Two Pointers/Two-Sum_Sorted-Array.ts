// DESCRIPTION (inspired by Leetcode.com)
// Given a sorted array of integers nums, determine if there exists a pair of numbers that sum to a given target.

// Example 1:
// Input:
// nums = [1,3,4,6,8,10,13]
// target = 13
// Output:
// True # (3 + 10 = 13)

// Example 2:
// Input:
// nums = [1,3,4,6,8,10,13]
// target = 6
// Output:
// False

function main(nums: number[], target: number) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const sumValude = nums[l] + nums[r];

    if (sumValude === target) {
      return true;
    }

    if (sumValude > target) {
      r--;
    } else {
      l++;
    }
  }

  return false;
}
const nums = [1, 2, 4, 6, 8, 10, 14];
const target = 13;
console.log(main(nums, target));
