// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
    let count0 = 0, count1 = 0, count2 = 0;

    // First pass: count
    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    // Second pass: overwrite
    let index = 0;

    while (count0-- > 0) nums[index++] = 0;
    while (count1-- > 0) nums[index++] = 1;
    while (count2-- > 0) nums[index++] = 2;
};