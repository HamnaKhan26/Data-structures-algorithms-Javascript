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