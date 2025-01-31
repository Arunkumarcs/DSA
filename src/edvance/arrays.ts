// Basic data structure
// Single or multi dimensiion
// Array store data in contiguous memory location
// at least one question is asked in interview
// bassis operation
// 1. Insertion
// 2. Deletion
// 3. Search
// 4. Update
// 5. Traversal

// Question 1:
// Set1
// 1. creat an integer array and return the average of the elements
// 2. give an integer array replace elements at odd indices which are even to -1

// Set2
// 1. Totation an array n number of times
// ex: [1,2,3,4,5] n=2
// output: [4,5,1,2,3]
export function rotateArray(arr: number[], n: number): number[] {
  const len = arr.length;
  const rotations = n % len;

  if (rotations === 0) {
    return arr;
  }

  for (let i = 0; i < rotations; i++) {
    arr.unshift(arr.pop() as number);
  }
  return arr;
}

// 2. Three sum problem
// Given an array of integers, find three numbers such that they add up to a specific target number.
// Input: [1, 2, 3, 4, 5], target = 9
// Output: [2, 3, 4]
// Three sum problem solution
export function findThreeSum(arr: number[], target: number): number[] | number {
  if (arr.length < 3) {
    return -1;
  }

  let map = [arr[0]];

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let mapIndex = target - (arr[i] + arr[j]);
      if (map.indexOf(mapIndex) != -1) {
        return [mapIndex, arr[i], arr[j]];
      }
    }
    map.push(arr[i]);
  }

  return -1;
}

