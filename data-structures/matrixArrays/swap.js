function processCommand(matrix, command) {
  const parts = command.toLowerCase().split(" ");

  if (parts[0] === "swap" && parts[1] === "rows") {
    const r1 = Number(parts[2]);
    const r2 = Number(parts[3]);
    [matrix[r1], matrix[r2]] = [matrix[r2], matrix[r1]];

  } else if (parts[0] === "swap" && parts[1] === "columns") {
    const c1 = Number(parts[2]);
    const c2 = Number(parts[3]);

    for (let i = 0; i < matrix.length; i++) {
      [matrix[i][c1], matrix[i][c2]] = [matrix[i][c2], matrix[i][c1]];
    }

  } else if (parts[0] === "reverse" && parts[1] === "row") {
    const r = Number(parts[2]);
    matrix[r].reverse();

  } else if (command.toLowerCase() === "rotate 90 deg clockwise") {
    matrix = rotate90Clockwise(matrix);
  }

  return matrix;
}

function rotate90Clockwise(matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const commands = [
  "swap rows 0 2",
  "swap columns 1 2",
  "reverse row 1",
  "rotate 90 deg clockwise"
];

for (let cmd of commands) {
  matrix = processCommand(matrix, cmd);
}

console.log(matrix);
