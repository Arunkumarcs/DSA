var containsNearbyDuplicate = function (nums, k) {
  let hasMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (
      hasMap.has(nums[index]) &&
      Math.abs(hasMap.get(nums[index]) - index) <= k
    ) {
      return true;
    } else {
      hasMap.set(nums[index], index);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 3));
