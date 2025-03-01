class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = "";
    for (const element of strs) {
      encoded += element.length + "#" + element;
    }
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decoded = [];
    let isTrueData = false;
    let lengthTrueData = "";

    if (str.length === 2) {
      return [""];
    }

    for (let index = 0; index < str.length; index++) {
      if (!isTrueData) {
        if (str[index] === "#") {
          isTrueData = true;
          continue;
        }
        lengthTrueData += str[index];
      }

      let dataLength = Number(lengthTrueData);
      if (lengthTrueData === 0) {
        decoded.push("");
      } else {
        decoded.push(str.substring(index, index + dataLength));
      }

      isTrueData = false;
      lengthTrueData = "";
      index += dataLength - 1;
    }

    return decoded;
  }
}

let input = [""];

let obj = new Solution();
let encoded = obj.encode(input);
console.log("encoded", encoded);
let decoded = obj.decode(encoded);
console.log("decoded", decoded);
