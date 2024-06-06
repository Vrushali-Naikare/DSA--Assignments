function infixToPrefix(infix) {
    const operators = {"^": 4,
                       "*": 3,
                       "/": 3,
                       "+": 2,
                       "-": 2,};
    const stack = [];
    let prefix = "";
    for (let i = infix.length - 1; i >= 0; i--) {
      let char = infix[i];
      if (char === ")") {
        stack.push(char);
      } else if (char === "(") {
        while (stack[stack.length - 1] !== ")") {
          prefix += stack.pop();
        }
        stack.pop();
      } else if (Object.keys(operators).includes(char)) {
        while (stack.length > 0 && operators[char] <= operators[stack[stack.length - 1]]) {
          prefix += stack.pop();
        }
        stack.push(char);
      } else {
        prefix += char;
      }
    }
    while (stack.length > 0) {
      prefix += stack.pop();
    }
    return prefix.split("").reverse().join("");
  }
  const infix = "a+b*(c^d-e)^(f+g*h)-i";
  console.log(infixToPrefix(infix));