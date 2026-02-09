const array = [10,5,2,-1,-6,9,11];

function twoSum(arr, target) {
    const numIndices = new Map();
    for (let i =0; i <arr.length; i++) {
        const complement = target - arr[i];
        if(numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        } else {
            numIndices.set(arr[i], i);
        }
    }
}

console.log(twoSum(array, 4)); // Output: [1, 3] because array[1] + array[3] = 5 + (-1) = 4


function twoSumLessThanK(nums, k) {
    nums.sort((a, b) => a - b); // Sort ascending
    let left = 0;
    let right = nums.length - 1;
    let maxSum = -1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++; // try a bigger sum
        } else {
            right--; // sum too big, decrease
        }
    }

    return maxSum;
}

// Example
console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60)); // 58
