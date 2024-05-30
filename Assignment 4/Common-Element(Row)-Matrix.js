function FindCommonElements(matrix) {
    if (!matrix.length) return [];

    let rows = matrix.length;
    let cols = matrix[0].length;

    let hashMap = {};
    for (let j = 0; j < cols; j++) {
        hashMap[matrix[0][j]] = 1;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (hashMap[matrix[i][j]] === i) {
                hashMap[matrix[i][j]]++;
            }
        }
    }
    let result = [];
    for (let key in hashMap) {
        if (hashMap[key] === rows) {
            result.push(parseInt(key));
        }
    }

    return result;
}

const matrix = [
    [1,2,1,4,8],
    [3,7,8,5,1],
    [8,7,7,3,1],
    [8,1,2,7,9]
];

const commonElements = FindCommonElements(matrix);
console.log(commonElements); 