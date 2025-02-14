// 215. Kth Largest Element in an Array
const findKthLargestIterative = (nums, k) => {
  for (let i = 0; i < k; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
  }

  return nums[k - 1];
};

const quickSelect = (nums, piviot) => {
  for (let index = 0; index < nums.length; index++) {
    if (index < piviot && nums[index] > nums[piviot]) {
      [nums[index], nums[piviot]] = [nums[piviot], nums[index]];
    }
    if (index > piviot && nums[index] < nums[piviot]) {
      [nums[index], nums[piviot]] = [nums[piviot], nums[index]];
    }
  }

  return nums;
};

const findKthLargest = (nums, k) => {
  const piviot = nums.length - k;

  quickSelect(nums, nums.length - 1);
  return nums[piviot];
};

module.exports = findKthLargest;
