const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/**
 * @param {number[][]} mat
* @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;

    // Sum of both diagonals
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - i - 1];
    }

    // If matrix size is odd, subtract the center element once
    if (n % 2 !== 0) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return sum;
};


diagonalSum(matrix);


//find sum of each row
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var rowSums = function(matrix) {
    const result = [];

    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        result.push(sum);
    }

    return result;
};
rowSums(matrix);


//find row with max sum
/**
 * @param {number[][]} matrix
 * @return {number}  // index of row with max sum
 */
var maxRowSum = function(matrix) {
    let maxSum = -Infinity;
    let maxRowIndex = -1;

    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxRowIndex = i;
        }
    }

    return maxRowIndex;
};
maxRowSum(matrix);

//find sum of each column
var columnSums = function(matrix) {
    const result = [];
    const cols = matrix[0].length;

    for (let j = 0; j < cols; j++) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][j];
        }
        result.push(sum);
    }

    return result;
};