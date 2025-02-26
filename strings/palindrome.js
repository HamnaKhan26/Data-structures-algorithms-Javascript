function isPalindrome(s) {
    // Remove non-alphanumeric characters & convert to lowercase
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Two-pointer approach
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }

    return true;
}

// Example Usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
