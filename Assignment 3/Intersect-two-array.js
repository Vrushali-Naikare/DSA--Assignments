function findIntersection(arr1, arr2) {
    const set = new Set(arr1);
    const intersection = [];

    arr2.forEach(element => {
        if (set.has(element)) {
            intersection.push(element);
            set.delete(element);
        }
    });

    return intersection;
}

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
console.log(findIntersection(arr1, arr2)); 