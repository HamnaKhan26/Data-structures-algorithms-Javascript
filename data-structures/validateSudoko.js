/**
 * You are working on a logic game made up of a series of puzzles. The first type of puzzle you settle on is "sub-Sudoku", a game where the player has to position the numbers 1..N on an NxN matrix.


Your job is to write a function that, given an NxN matrix, returns true if  every row and column contains the numbers 1..N


The UI for the game does not do any validation on the numbers the player enters, so the matrix can contain any signed integer.


grid1 = [[2, 3, 1],
         [1, 2, 3],
         [3, 1, 2]]            -> True  (A grid of size 3: every row and column contains the numbers 1,2,3) 


grid2 = [[1, 2, 3],
         [3, 2, 1],
         [3, 1, 2]]            -> False (The first column is missing the value 2. It should contain the numbers 1,2 and 3. 
                                         Similarly, the second column is missing the value 3.)                                         


grid3 = [[2, 2, 3],
         [3, 1, 2],
         [2, 3, 1]]            -> False (The first row is missing the value 1. Same for the first column.)


grid4 = [[1]]                  -> True  (a grid of size one: it contains 1 as the single value) 


grid5 = [[-1, -2, -3],
         [-2, -3, -1],
         [-3, -1, -2]]         -> False (The rows and columns need to contain the values 1,2,3 and not -1, -2, and -3) 


grid6 = [[1, 3, 3],
         [3, 1, 2],
         [2, 3, 1]]            -> False


grid7 = [[1, 2, 3, 4],
         [4, 3, 2, 1],
         [1, 3, 2, 4],
         [4, 2, 3, 1]]         -> False


grid8 = [[0, 3],
         [3, 0]]               -> False (for a grid of size two, all the rows and columns should contain 1 and 2, not 0 and 3 )


grid9 = [[0, 1],
         [1, 0]]               -> False (same as above all rows and columns should contain 1 and 2, not 0 and 1 )


grid10 = [[1, 1, 6],
          [1, 6, 1],
          [6, 1, 1]]           -> False


grid11 = [[1, 2, 3, 4],
          [2, 3, 1, 4],
          [3, 1, 2, 4],
          [4, 2, 3, 1]]        -> False


grid12 = [[-1, -2, 12, 1],
          [12, -1, 1, -2],
          [-2, 1, -1, 12],
          [1, 12, -2, -1]]     -> False   (all the rows and columns should contain the values 1,2,3,4) 
                                          (the input could contain positive and negative numbers)


grid13 = [[2, 3, 3],
          [1, 2, 1],
          [3, 1, 2]]           -> False


grid14 = [[1, 3],              -> False
          [3, 1]]


grid15 = [[2, 3],              -> False
          [3, 2]]


grid16 = [[1, 2],              -> False
          [2, 2]]


grid17 = [[2, 3, 1],           -> False
          [1, 2, 3],
          [2, 3, 1]];




grid18 = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   -> True
          [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
          [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
          [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
          [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
          [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
          [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
          [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
          [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
          [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]];


grid19 = [[1,3,3,4,3,6,7,8,10,10],           -> False
          [3,3,4,3,6,7,8,10,10,1],
          [3,4,3,6,7,8,10,10,1,3],
          [4,3,6,7,8,10,10,1,3,3],
          [3,6,7,8,10,10,1,3,3,4],
          [6,7,8,10,10,1,3,3,4,3],
          [7,8,10,10,1,3,3,4,3,6],
          [8,10,10,1,3,3,4,3,6,7],
          [10,10,1,3,3,4,3,6,7,8],
          [10,1,3,3,4,3,6,7,8,10]];


grid20 = [[1, 2],                            -> False
          [99, 1]]




validateSudoku(grid1)  => True
validateSudoku(grid2)  => False
validateSudoku(grid3)  => False
validateSudoku(grid4)  => True
validateSudoku(grid5)  => False
validateSudoku(grid6)  => False
validateSudoku(grid7)  => False
validateSudoku(grid8)  => False
validateSudoku(grid9)  => False
validateSudoku(grid10) => False
validateSudoku(grid11) => False
validateSudoku(grid12) => False
validateSudoku(grid13) => False
validateSudoku(grid14) => False
validateSudoku(grid15) => False
validateSudoku(grid16) => False
validateSudoku(grid17) => False
validateSudoku(grid18) => True
validateSudoku(grid19) => False
validateSudoku(grid20) => False
  
Complexity analysis variables:  
  
N = The number of rows/columns in the matrix
 */
"use strict";
const grid1 = [
  [2, 3, 1],
  [1, 2, 3],
  [3, 1, 2]
];
const grid2 = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2]
];
const grid3 = [
  [2, 2, 3],
  [3, 1, 2],
  [2, 3, 1]
];
const grid4 = [
  [1]
];
const grid5 = [
  [-1, -2, -3],
  [-2, -3, -1],
  [-3, -1, -2]
];
const grid6 = [
  [1, 3, 3],
  [3, 1, 2],
  [2, 3, 1]
];
const grid7 = [
  [1, 2, 3, 4],
  [4, 3, 2, 1],
  [1, 3, 2, 4],
  [4, 2, 3, 1]
];
const grid8 = [
  [0, 3],
  [3, 0]
];
const grid9 = [
  [0, 1],
  [1, 0]
];
const grid10 = [
  [1, 1, 6],
  [1, 6, 1],
  [6, 1, 1]
];
const grid11 = [
  [1, 2, 3, 4],
  [2, 3, 1, 4],
  [3, 1, 2, 4],
  [4, 2, 3, 1]
];
const grid12 = [
  [-1, -2, 12, 1],
  [12, -1, 1, -2],
  [-2, 1, -1, 12],
  [1, 12, -2, -1]
];
const grid13 = [
  [2, 3, 3],
  [1, 2, 1],
  [3, 1, 2]
];
const grid14 = [
  [1, 3],
  [3, 1]
];
const grid15 = [
  [2, 3],
  [3, 2]
];
const grid16 = [
  [1, 2],
  [2, 2]
];
const grid17 = [
  [2, 3, 1],
  [1, 2, 3],
  [2, 3, 1]
];
const grid18 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
  [3, 4, 5, 6, 7, 8, 9, 10, 1, 2],
  [4, 5, 6, 7, 8, 9, 10, 1, 2, 3],
  [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
  [6, 7, 8, 9, 10, 1, 2, 3, 4, 5],
  [7, 8, 9, 10, 1, 2, 3, 4, 5, 6],
  [8, 9, 10, 1, 2, 3, 4, 5, 6, 7],
  [9, 10, 1, 2, 3, 4, 5, 6, 7, 8],
  [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];
const grid19 = [
  [1, 3, 3, 4, 3, 6, 7, 8, 10, 10],
  [3, 3, 4, 3, 6, 7, 8, 10, 10, 1],
  [3, 4, 3, 6, 7, 8, 10, 10, 1, 3],
  [4, 3, 6, 7, 8, 10, 10, 1, 3, 3],
  [3, 6, 7, 8, 10, 10, 1, 3, 3, 4],
  [6, 7, 8, 10, 10, 1, 3, 3, 4, 3],
  [7, 8, 10, 10, 1, 3, 3, 4, 3, 6],
  [8, 10, 10, 1, 3, 3, 4, 3, 6, 7],
  [10, 10, 1, 3, 3, 4, 3, 6, 7, 8],
  [10, 1, 3, 3, 4, 3, 6, 7, 8, 10]
];
const grid20 = [
  [1, 2],
  [99, 1]
];
