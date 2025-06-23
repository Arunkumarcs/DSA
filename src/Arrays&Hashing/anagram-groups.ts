function makeHash(str: string, zeroIndex: number) {
  const hash = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    hash[char.charCodeAt(0) - zeroIndex]++;
  }

  return hash.join(",");
}

export const anagramGroups = (strs: string[]) => {
  const map = new Map<string, string[]>();
  const zeroIndex = "a".charCodeAt(0);

  for (const str of strs) {
    const hash = makeHash(str, zeroIndex);

    if (map.has(hash)) {
      map.get(hash)?.push(str);
    } else {
      map.set(hash, [str]);
    }
  }

  return Array.from(map.values());
};
