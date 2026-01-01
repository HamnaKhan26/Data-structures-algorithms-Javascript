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