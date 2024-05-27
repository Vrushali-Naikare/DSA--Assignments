function countFrequency(arr) {
    let frequency = {};

    arr.forEach(element => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    return frequency;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countFrequency(arr)); 