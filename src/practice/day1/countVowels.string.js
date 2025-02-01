// Question 3: Count Vowels in a String
// Problem Statement:
// Count and return the number of vowels (a, e, i, o, u) in a given string.

const countVowels = {
  init(str) {
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        count++;
      }
    }
    return count;
  },
};

module.exports = countVowels;
