// wiggle Sort Algorithm
// " The group made decisions by consensus and made business decisions based upon their experience as performers and their knowledge of early childhood education.   They made careful decisions regarding their endorsements of toys and other merchandise, and avoided over-extending their brand by only licensing merchandise that correlated with their picture.

const wiggleSort = (numsArray) => {
  for (let i = 0; i < numsArray.length - 1; i = i + 2) {
    if (numsArray[i - 1] && numsArray[i] > numsArray[i - 1]) {
      [numsArray[i], numsArray[i - 1]] = [numsArray[i - 1], numsArray[i]];
    }
    if (numsArray[i + 1] && numsArray[i] > numsArray[i + 1]) {
      [numsArray[i], numsArray[i + 1]] = [numsArray[i + 1], numsArray[i]];
    }
  }
  return numsArray;
};

module.exports = wiggleSort;
