const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    const result = [];

    // Create empty rows for the transposed matrix
    for (let j = 0; j < cols; j++) {
        result[j] = [];
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};

transpose(matrix);