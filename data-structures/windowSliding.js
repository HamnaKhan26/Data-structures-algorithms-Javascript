    // Javascript code for
    // O(n) solution for finding
    // maximum sum of a subarray
    // of size k
    function maxSum(arr, n, k) {
        let max = 0;
        let sum = 0;
        // find initial sum of first k elements
        for (let i = 0; i < k; i++) {
            sum += arr[i];
            max = sum;
        }
        // iterate the array once
        // and increment the right edge
        for (let i = k; i < n; i++) {
            sum += arr[i] - arr[i - k];
            
            // compare if sum is more than max,
            // if yes then replace
            // max with new sum value
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(maxSum(arr, n, k));


/**
 * @param {number[]} arr - Input array of non-negative integers
 * @param {number} target - Target sum to find
 * @return {number[]} - 1-based indices of the subarray or [-1] if not found
 */
function findSubarrayWithSum(arr, target) {
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        // Shrink window while sum is greater than target
        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }

        // If we find the target sum, return 1-based indices
        if (currentSum === target) {
            return [left + 1, right + 1];
        }
    }

    return [-1]; // No subarray found
}

// Example usage
console.log(findSubarrayWithSum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]
console.log(findSubarrayWithSum([1, 4, 20, 3, 10, 5], 33)); // Output: [3, 5]
console.log(findSubarrayWithSum([1, 4, 0, 0, 3, 10, 5], 7)); // Output: [1, 4]
console.log(findSubarrayWithSum([1, 2, 3], 6)); // Output: [1, 3]
console.log(findSubarrayWithSum([1, 2, 3], 10)); // Output: [-1]


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let seen = new Set();

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Output: 0

