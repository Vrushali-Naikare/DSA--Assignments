function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j < i; j++) {
            pattern += " ";
        }
        for (let k = i; k <= rows; k++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}

const numberOfRows = 5;
printStarPattern(numberOfRows);