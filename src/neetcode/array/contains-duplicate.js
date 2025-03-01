const hasDuplicate = (nums) => {
  let map = new Map();

  for (const element of nums) {
    if (map.has(element)) {
      return true;
    } else {
      map.set(element, 1);
    }
  }
  return false;
};

console.log("[1, 2, 3, 3]", true, hasDuplicate([1, 2, 3, 3]));
console.log("[1,2,3,4]", false, hasDuplicate([1, 2, 3, 4]));
