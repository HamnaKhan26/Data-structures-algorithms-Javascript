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

// Spiral traversal
function traverseSpiral(matrix) {
    let top = 0;  //starting row index
    let bottom = matrix.length - 1;  //ending row index
    let left = 0;  //starting column index
    let right = matrix[0].length - 1; //ending column index

    if (matrix.length === 0) return [];

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {  //first row
            console.log(matrix[top][col]);
        }
        top++;
        for (let row = top; row <= bottom; row++) {  //right column
            console.log(matrix[row][right]);
        }
        right--;
        if (top <= bottom) {  //last row
            for (let col = right; col >= left; col--) {
                console.log(matrix[bottom][col]);
            }
            bottom--;
        }
        if (left <= right) { //left column
            for (let row = bottom; row >= top; row--) {
                console.log(matrix[row][left]);
            }
            left++;
        }
    }

}
traverseSpiral(matrix);