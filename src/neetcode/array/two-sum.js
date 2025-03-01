function twoSum(nums, target) {
  let objMap = new Map();
  objMap.set(nums[0], 0);

  for (let index = 1; index < nums.length; index++) {
    const lookUpValue = target - nums[index];
    if (objMap.has(lookUpValue)) {
      return [objMap.get(lookUpValue), index];
    } else {
      objMap.set(nums[index], index);
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
