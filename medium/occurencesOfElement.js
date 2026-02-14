/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const occurrences = [];
    
    // Step 1: Record all indices where x appears
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) {
            occurrences.push(i);
        }
    }
    
    // Step 2: Map queries to the stored indices
    return queries.map(q => {
        // If the query asks for the 3rd occurrence, but we only have 2, return -1
        if (q > occurrences.length) {
            return -1;
        }
        // Adjust for 0-based indexing of our array
        return occurrences[q - 1];
    });
};