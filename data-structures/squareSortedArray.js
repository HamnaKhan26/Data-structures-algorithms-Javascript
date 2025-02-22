/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }

    let left = 0;
    let right = nums.length-1;
    let res=[];

    for(let pos = nums.length-1; pos >= 0; pos--) {
        if(nums[left] < nums[right]) { //right val greater
            res[pos] = nums[right];
            right--;
        } else {
            res[pos] = nums[left];
            left++;
        }
    }

    return res;

};