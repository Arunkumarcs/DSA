/**
 * Performs an iterative binary search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, -1 otherwise
 * Time Complexity: O(log n)
 */
export function binarySearchIterative(arr: number[], target: number): number {
  if (!arr.length) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    const midVal = arr[mid];

    if (midVal === target) return mid;
    if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

/**
 * Performs a linear search on an array
 * @param arr - The array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, -1 otherwise
 * Time Complexity: O(n)
 */
export function linearSearch(arr: number[], target: number): number {
  if (!arr.length) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

/**
 * Performs a recursive binary search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @param left - The left boundary index
 * @param right - The right boundary index
 * @returns The index of the target if found, -1 otherwise
 * Time Complexity: O(log n)
 */
export function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number,
  right: number
): number {
  if (left > right || !arr.length) return -1;

  const mid = (left + right) >>> 1;
  const midVal = arr[mid];

  if (midVal === target) return mid;
  return midVal < target
    ? binarySearchRecursive(arr, target, mid + 1, right)
    : binarySearchRecursive(arr, target, left, mid - 1);
}

/**
 * Counts occurrences of a pattern in a string using naive string matching
 * @param str - The string to search in
 * @param pattern - The pattern to search for
 * @returns The number of times the pattern appears in the string
 * Time Complexity: O(n*m) where n is str length and m is pattern length
 */
export function naiveStringSearch(str: string, pattern: string): number {
  if (!str || !pattern || pattern.length > str.length) return 0;

  const strLen = str.length;
  const patternLen = pattern.length;
  let count = 0;

  outer: for (let i = 0; i <= strLen - patternLen; i++) {
    for (let j = 0; j < patternLen; j++) {
      if (str[i + j] !== pattern[j]) continue outer;
    }
    count++;
  }
  return count;
}

/**
 * Performs Jump Search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 * Time Complexity: O(√n)
 */
export function jumpSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (!n) return -1;

  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  let curr = step;

  while (arr[Math.min(curr, n) - 1] < target) {
    prev = curr;
    curr += step;
    if (prev >= n) return -1;
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(curr, n)) return -1;
  }

  return arr[prev] === target ? prev : -1;
}

/**
 * Performs Interpolation Search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 * Time Complexity: O(log log n) average case, O(n) worst case
 */
export function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) return arr[low] === target ? low : -1;

    const pos =
      low +
      ((((target - arr[low]) * (high - low)) / (arr[high] - arr[low])) | 0);

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}

/**
 * Performs Exponential Search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 * Time Complexity: O(log n)
 */
export function exponentialSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (!n) return -1;
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < n && arr[i] <= target) i <<= 1;

  return binarySearchRecursive(arr, target, i >> 1, Math.min(i, n - 1));
}

/**
 * Performs Fibonacci Search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 * Time Complexity: O(log n)
 */
export function fibonacciSearch(arr: number[], target: number): number {
  const n = arr.length;
  if (!n) return -1;

  let fibM2 = 0,
    fibM1 = 1,
    fibM = fibM2 + fibM1;

  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;
  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);
    const val = arr[i];

    if (val < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (val > target) {
      fibM = fibM2;
      fibM1 -= fibM2;
      fibM2 = fibM - fibM1;
    } else return i;
  }

  return fibM1 && arr[offset + 1] === target ? offset + 1 : -1;
}

/**
 * Performs Ternary Search on a sorted array
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of target if found, -1 otherwise
 * Time Complexity: O(log3 n)
 */
export function ternarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const delta = ((right - left) / 3) | 0;
    const mid1 = left + delta;
    const mid2 = right - delta;

    const val1 = arr[mid1];
    const val2 = arr[mid2];

    if (val1 === target) return mid1;
    if (val2 === target) return mid2;

    if (target < val1) right = mid1 - 1;
    else if (target > val2) left = mid2 + 1;
    else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
}

/**
 * Checks if a sublist exists within a larger list
 * @param list - The main list to search in
 * @param sublist - The sublist to search for
 * @returns true if sublist exists in list, false otherwise
 * Time Complexity: O(n*m) where n is list length and m is sublist length
 */
export function sublistSearch<T>(list: T[], sublist: T[]): boolean {
  if (!sublist.length) return true;
  if (list.length < sublist.length) return false;

  const subLen = sublist.length;
  outer: for (let i = 0; i <= list.length - subLen; i++) {
    for (let j = 0; j < subLen; j++) {
      if (list[i + j] !== sublist[j]) continue outer;
    }
    return true;
  }
  return false;
}
