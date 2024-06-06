class Stack {
    constructor() {
        this.items = [];
    }
    // #Push(add element to the stack) 
    push(element) {
        this.items.push(element);
    }
    // #Pop(remove element from the stack)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }
    // #Peek 
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    // #is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop()); 
console.log(stack.peek());
console.log(stack.isEmpty());
