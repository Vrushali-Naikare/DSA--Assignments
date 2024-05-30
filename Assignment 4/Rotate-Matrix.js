function rotateMatrix(matrix) {
    // 'm' for no of rows and 'n' for no of columns
    const m = matrix.length;
    const n = matrix[0].length;
    
    const rotatedMatrix = Array.from({ length: n }, () => Array(m).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotatedMatrix[j][m - 1 - i] = matrix[i][j];
        }
    }
    
    return rotatedMatrix;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix);
