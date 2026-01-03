const arr = [3,4,6,1,2];

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    return output;
}


console.log(productExceptSelf(arr)); // Output: [48, 36, 24, 144, 72]