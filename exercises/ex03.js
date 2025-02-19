// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  let tempStack = new Stack();

  while(!stack.isEmpty()) {
    let targetElement = stack.remove();
    let thirdStack = new Stack();

    tempStack.add(targetElement);
    while (!tempStack.isEmpty() && tempStack.peek() !== targetElement) {
      thirdStack.add(tempStack.remove())
    }

  }


  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove())
  }
}
// 5 2 1 5 1 3
// Create stack
const stack = new Stack();
stack.add(5);
stack.add(2);
stack.add(1);
stack.add(5);
stack.add(1);
stack.add(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [5, 2, 1, 3]