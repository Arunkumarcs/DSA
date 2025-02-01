// Multi-dimensional array
function arrayTransporse(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[i].length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      console.log(arr, i, j);
    }
  }
  return arr;
}

// Rotate the matrix by 90 degrees clockwise
function clockwisteRotateMatrix(arr) {
  arr = arrayTransporse(arr);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }
  return arr;
}

// console.log(
//   clockwisteRotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// if value is zero then make the row and column zero
function zeroMatrix(arr) {
  let skipRows = [];
  let skipColumns = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (skipRows.includes(i) || skipColumns.includes(j)) {
        continue;
      }
      if (arr[i][j] === 0) {
        skipRows.push(i);
        skipColumns.push(j);
        makeColumnZero(arr, j);
        makeRowZero(arr, i);
      }
    }
  }
  return arr;
}

function makeColumnZero(arr, j) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][j] = 0;
  }
}

function makeRowZero(arr, i) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = 0;
  }
}
