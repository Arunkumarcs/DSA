// 1422. Maximum Score After Splitting a String

const maximumScoreAfterSplittingString = (num) => {
  console.time("maximumScoreAfterSplittingString");
  const numArray = num.split("");
  const prefix = Array(numArray.length).fill(0);
  let prefixSum = 0;
  let sufixSum = 0;
  let max = 0;

  for (let index = 0; index <= numArray.length - 1; index++) {
    if (numArray[index] === "0") {
      prefixSum++;
    }
    if (numArray[numArray.length - index] === "1") {
      sufixSum++;
    }
    prefix[index] = prefix[index] + prefixSum;
    prefix[numArray.length - index - 1] =
      prefix[numArray.length - index - 1] + sufixSum;
  }

  for (let index = 0; index < numArray.length - 1; index++) {
    if (prefix[index] > max) {
      max = prefix[index];
    }
  }
  console.timeEnd("maximumScoreAfterSplittingString");
  return [max];
};

// Optimized
const maxScore = function (s) {
  const start = performance.now();
  console.time("Optimized Solution");
  let maxScore = 0;
  let countZerosLeft = 0;
  let countOnesRight = s.split("1");
  countOnesRight = countOnesRight.length - 1;

  for (let i = 0; i < s.length - 1; i++) {
    countZerosLeft += s[i] === "0" ? 1 : 0;
    countOnesRight -= s[i] === "1" ? 1 : 0;
    maxScore = Math.max(maxScore, countZerosLeft + countOnesRight);
  }

  console.timeEnd("Optimized Solution");
  return [maxScore];
};

console.table({
  maximumScoreAfterSplittingString: maximumScoreAfterSplittingString("011101"),
  maxScore: maxScore("011101"),
});
