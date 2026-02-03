// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

// Example 1:

// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  //sort
  nums.sort((a, b) => a - b);
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};