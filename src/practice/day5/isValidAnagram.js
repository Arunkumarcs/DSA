function isValidAnagramType1(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

function isValidAnagramType2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = new Map();
  for (let i = 0; i < str1.length; i++) {
    map.set(str1[i], (map.get(str1[i]) || 0) + 1);
    map.set(str2[i], (map.get(str2[i]) || 0) - 1);
  }
  for (let value of map.values()) {
    if (value !== 0) return false;
  }
  return true;
}

module.exports = {
  isValidAnagramType1,
  isValidAnagramType2,
};
