/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // Different lengths cannot be anagrams

    let charCount = {};

    for(let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of t) {
        if(!charCount[char]) return false;
        charCount[char]--; 
    }

    return true;

};

// Example Usage:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false