function insertToMap(firstMap, first, second) {
  for (let index = 0; index < first.length; index++) {
    firstMap.has(first[index])
      ? firstMap.set(first[index], firstMap.get(first[index]) + 1)
      : firstMap.set(first[index], 1);

    firstMap.has(second[index])
      ? firstMap.set(second[index], firstMap.get(second[index]) - 1)
      : firstMap.set(second[index], -1);
  }
}

function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const firstMap = new Map();
  insertToMap(firstMap, first, second);

  for (const [_, value] of firstMap) {
    if (value != 0) {
      return false;
    }
  }

  return true;
}

// console.log(
//   `Input: s = "racecar", t = "carrace"`,
//   true,
//   isAnagram("racecar", "carrace")
// );

// console.log(`Input: s = "jar", t = "jam"`, false, isAnagram("jar", "jam"));
console.log(
  `Input: s = "racecar", t = "carrace"`,
  true,
  isAnagram("racecar", "carrace")
);
