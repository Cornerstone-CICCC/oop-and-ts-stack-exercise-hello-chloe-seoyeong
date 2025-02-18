// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeEvenNums(stack) {
  // your code here
  let tempStack = new Stack();
  
  while(!stack.isEmpty()) {
    let removedElement = stack.remove();

    if(removedElement % 2 !== 0) {
      tempStack.add(removedElement)
    }
  }

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove());
  }
}

// Create stack
const stack = new Stack();
stack.add(5);
stack.add(8);
stack.add(1);
stack.add(3);
stack.add(6);

console.log(stack.printStack());
removeEvenNums(stack)
console.log(stack.printStack()) // [5, 1, 3]