// insertion Sort Algorithm

/**
 *
 * @param {*} arr
 * @param {*} j
 * @param {*} temp
 * @returns
 */
const switchIndex = (arr, j, temp) => {
  while (j >= 0 && arr[j] > temp) {
    arr[j + 1] = arr[j];
    j--;
  }
  return [j, temp];
};

/**
 *
 * @param {*} arr
 * @returns
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let [j, temp] = switchIndex(arr, i - 1, arr[i]);
    arr[j + 1] = temp;
  }
  return arr;
};

module.exports = insertionSort;
