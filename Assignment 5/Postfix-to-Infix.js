function postfixToInfix(postfix) {
    const stack = [];

    for (let char of postfix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(`(${a}${char}${b})`);
        }
    }
     return stack.pop();
}
const postfixExpr2 = "AB+CD-*";
console.log(postfixToInfix(postfixExpr2));