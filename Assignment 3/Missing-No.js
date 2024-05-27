function findMissingNo(arr) {
    let n = arr.length + 1;
    let totalSum = n * (n + 1) / 2;  
    let actualSum = arr.reduce((sum, num) => sum + num, 0);  
    let missingNumber = totalSum - actualSum;  
    return missingNumber;
}

let arr = [1, 2, 4, 6,7,8];
console.log(findMissingNo(arr));  