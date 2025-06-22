function updateMap(map: Map<string, number>, s: string, t: string): void {
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
}

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();
  updateMap(map, s, t);

  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
}
