function groupAnagramsCategorizeByFrequency(strs) {  //O(nk) time complexity where n is number of strings and k is max length of a string
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



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // A Map to store our groups: { "fingerprint": ["word1", "word2"] }
    const groups = new Map();

    for (const s of strs) {
        // 1. Create a "fingerprint" (an array of 26 zeros)
        const count = new Array(26).fill(0);
        
        // 2. Tally up every letter in the word
        for (const char of s) {
            // 'a' has a code of 97, so charCode - 97 maps 'a' to 0, 'b' to 1, etc.
            count[char.charCodeAt(0) - 97]++;
        }

        // 3. Turn that tally into a unique string key
        // "eat" becomes "1#0#0#0#1#...#1#..."
        const key = count.join('#');

        // 4. Put the word into its corresponding group
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(s);
    }

    // Return all the groups we found
    return Array.from(groups.values());
};

// Example usage:
const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input1));