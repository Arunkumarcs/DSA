var removeDuplicates = function (nums) {
  let data = new Set(nums);
  return Array.from(data);
};

console.log(removeDuplicates([1, 1, 2]));
