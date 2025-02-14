//* Bubble Sort
/**
 * Time complexity : O(n^2)
 * Space complexity : O(1)
 * Worst sorting algorithm : iterates over the entire array and swaps the elements if one is bigger than the other. Due to the nature of the algorithm, the two for loops result in a quadratic time complexity.
 */

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j <arr.length-i-1;j++) {
            if(arr[j] > arr[j+1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
;            }
        }
    }
    return arr;
}

const result = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(result)