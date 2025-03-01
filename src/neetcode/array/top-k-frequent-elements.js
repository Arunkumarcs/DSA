/**
 * Type 1
 */
class Solution {
  count = {};
  freq = [];
  res = [];

  makeCount(nums) {
    for (const element of nums) {
      this.count[element] = (this.count[element] || 0) + 1;
    }
  }

  makeFeqIndex() {
    for (const index in this.count) {
      if (!this.freq[this.count[index]]) {
        this.freq[this.count[index]] = [];
      }
      this.freq[this.count[index]].push(index);
    }
  }

  topKFrequent(nums, k) {
    this.makeCount(nums);
    this.makeFeqIndex();

    for (let i = this.freq.length - 1; i > 0; i--) {
      if (!this.freq[i]) {
        continue;
      }
      for (const n of this.freq[i]) {
        this.res.push(Number(n));
        if (this.res.length === k) {
          return this.res;
        }
      }
    }

    return res;
  }
}

/**
 * Type 2
 */
const makeCount = (count, nums) => {
  for (const element of nums) {
    count[element] = (count[element] || 0) + 1;
  }
};

const makeFeqIndex = (freq, count) => {
  for (const index in count) {
    if (!freq[count[index]]) {
      freq[count[index]] = [];
    }
    freq[count[index]].push(index);
  }
};

const topKFrequent = function (nums, k) {
  const count = {};
  makeCount(count, nums);

  const freq = [];
  makeFeqIndex(freq, count);

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    if (!freq[i]) {
      continue;
    }
    for (const n of freq[i]) {
      res.push(Number(n));
      if (res.length === k) {
        return res;
      }
    }
  }

  return res;
};

console.log("topKFrequent", [2, 3], topKFrequent([-1, -1], 1));
