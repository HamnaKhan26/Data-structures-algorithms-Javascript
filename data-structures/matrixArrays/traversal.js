const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Row-wise traversal
function traverseRowWise(matrix) {

    for (let row = 0; row< matrix.length; row++) {
        for (let col = 0; col<matrix[row].length; col++) {
            console.log(matrix[row][col]);
        }
    }
}

traverseRowWise(matrix);

// Column-wise traversal
function traverseColumnWise(matrix) {

    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row][col]);
        }
    }
}

traverseColumnWise(matrix);

