var Duplicate = function(arr) {
    let seen = new Set();
    let k = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            arr[k] = arr[i];
            k++;
        }
    }

    return k;
};

var nums = [1, 2, 3, 4, 2, 1, 4];
var k = Duplicate(arr);
console.log("New length:", k);
console.log("New array:", arr.slice(0, k));
