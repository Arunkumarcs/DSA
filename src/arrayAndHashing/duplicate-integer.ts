export function hasDuplicate(nums: number[]): boolean {
  let map = new Map();

  debugger;

  for (const element of nums) {
    if (map.has(element)) {
      return true;
    } else {
      map.set(element, 1);
    }
  }
  return false;
}
