function groupAnagramsCategorizeByFrequency(strs) {
  if (!strs || strs.length === 0) return [];

  const frequencyStringsMap = new Map();

  for (const str of strs) {
    const frequencyString = getFrequencyString(str);

    if (frequencyStringsMap.has(frequencyString)) {
      frequencyStringsMap.get(frequencyString).push(str);
    } else {
      frequencyStringsMap.set(frequencyString, [str]);
    }
  }

  return Array.from(frequencyStringsMap.values());
}

function getFrequencyString(str) {
  const freq = new Array(26).fill(0);

  for (const c of str) {
    freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let frequencyString = '';
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode('a'.charCodeAt(0) + i);
    frequencyString += c + freq[i];
  }

  return frequencyString;
}

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagramsCategorizeByFrequency(input));
