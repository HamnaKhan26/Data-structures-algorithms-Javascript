/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Create a set from nums1 to remove duplicates
    const set1 = new Set(nums1);
    const result = new Set();

    // Check for common elements in nums2
    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num); // Add common elements to result set
        }
    }

    return Array.from(result); // Convert set to array
};

// Example usage
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
