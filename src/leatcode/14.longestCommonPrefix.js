// Longest Common Prefix
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let minLengthIndex = returnMinLengthStringIndex(strs);
  let prefix = strs[minLengthIndex];

  for (let i = 0; i < strs.length; i++) {
    if (minLengthIndex == i) {
      continue;
    }
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) return "";
    }
  }
  return prefix;
};
const returnMinLengthStringIndex = (strs) => {
  let minLength = strs[0].length;
  let minLengthIndex = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
      minLengthIndex = i;
    }
  }
  return minLengthIndex;
};

module.exports = { longestCommonPrefix };
