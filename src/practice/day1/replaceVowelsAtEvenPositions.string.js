// Question 4: Replace Vowels at Even Positions with '*'
// Problem Statement:
// Modify a given string by replacing vowels at even positions with *.

const replaceVowelsAtEvenPositions = {
  vovels: {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    A: "A",
    E: "E",
    I: "I",
    O: "O",
    U: "U",
  },

  init(str) {
    let input = str.split("");
    for (let i = 1; i < input.length; i = i + 2) {
      if (input[i] && this.vovels[input[i]]) {
        input[i] = "*";
      }
    }
    return input.join("");
  },
};

module.exports = replaceVowelsAtEvenPositions;
