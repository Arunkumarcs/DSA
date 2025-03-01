const zeroIndex = "a".charCodeAt(0);

const makeHash = (element) => {
  let mapKey = new Array(26).fill(0);
  for (let index = 0; index < element.length; index++) {
    mapKey[element[index].charCodeAt(0) - zeroIndex] += 1;
  }
  return mapKey.join(",");
};

const groupHash = (retMap, mapKey, element) => {
  if (!retMap[mapKey]) {
    retMap[mapKey] = [];
  }
  retMap[mapKey].push(element);
};

const groupAnagrams = function (strs) {
  const retMap = {};
  for (const element of strs) {
    let mapKey = makeHash(element);
    groupHash(retMap, mapKey, element);
  }

  return Object.values(retMap);
};

console.log(
  "groupAnagrams",
  [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
