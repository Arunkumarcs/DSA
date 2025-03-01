class Solution {
  alphaNum(c) {
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
    );
  }

  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) {
        l++;
      }
      while (l < r && !this.alphaNum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      r--;
      l++;
    }
    return true;
  }
}

const obj = new Solution();
console.log("isPalindrome", obj.isPalindrome("Was it a car or a cat I saw?"));
