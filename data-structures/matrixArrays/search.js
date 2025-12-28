const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];

const target = 3;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rowIdx = searchPotentialRow(matrix, target);
    if (rowIdx !== -1) {
        return binarySearchOverRow(rowIdx, matrix, target);
    }
    return false;
};

function searchPotentialRow(matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    const lastColIdx = matrix[0].length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (matrix[mid][0] <= target && target <= matrix[mid][lastColIdx]) {
            return mid;
        } else if (matrix[mid][0] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function binarySearchOverRow(rowIdx, matrix, target) {
    let low = 0;
    let high = matrix[rowIdx].length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (matrix[rowIdx][mid] === target) return true;
        if (matrix[rowIdx][mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return false;
}

searchMatrix(matrix, target);


// method 1: iterate each element O(m*n)
// method 2: binary search each row if sorted O(m*log(n))

// efficient solution
// -> search for a potential row
// -> apply binary search  O(log(m*n))