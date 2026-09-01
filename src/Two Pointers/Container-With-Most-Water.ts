// DESCRIPTION (inspired by Leetcode.com)
// Given an array heights where each element represents the height of a vertical line, pick two lines to act as the walls of a container. Return the maximum area (amount of water) the container can hold.
// What is area? Width × height, where width is the distance between walls, and height is the shorter wall (water overflows at the shorter wall).
// Input: heights = [3, 4, 1, 2, 2, 4, 1, 3, 2]
// Output: 21

function main(heights: number[]) {
  let area = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const areaHeight = Math.min(heights[left], heights[right]);
    const areawidth = right - left;
    area = Math.max(area, areaHeight * areawidth);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
const heights = [0, 2];
console.log(main(heights));
