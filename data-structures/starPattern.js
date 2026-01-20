

function printStarPattern(rows) {

    for(let i =0; i < rows; i++) {
        let pattern = '';
        for(let j=0; j < rows; j++) {
            if(i === 0 || i === rows -1 || j === 0 || j === rows -1) {

                pattern += '*';
            } else {
                pattern += ' ';
            }
        }
        console.log(pattern);
    }
    
}

//printStarPattern(5);
//printStarPattern(8);

// You are given an array of non-negative integers.

// Replace each integer in the array with the sum of its digits.

// After transforming the array, determine the most frequently occurring digit sum.

// If there are multiple digit sums with the same highest frequency, return any one of them.


function sumOfDigits(num) {
    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function processArray(arr) {
    let mostFrequent = 0;
    for(let i =0; i < arr.length; i++) {
        const sum = sumOfDigits(arr[i]);
        arr[i] = sum;

        if(arr[i] > mostFrequent) {
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}

//console.log(processArray([12, 34, 56, 78, 90])); // Example usage
console.log(processArray([3,23,32,0])); // Example usage