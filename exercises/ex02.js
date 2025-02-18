// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function lowercaseStrings(stack) {
  // your code here
  let tempStack = new Stack();

  while(!stack.isEmpty()) {
    let removedElement = stack.remove();
    tempStack.add(removedElement.toLowerCase());
  }

  while(!tempStack.isEmpty()) {
    stack.add(tempStack.remove())
  }
}

// Create stack
const stack = new Stack();
stack.add("Hello");
stack.add("woRLd");
stack.add("good");
stack.add("MORNING");

lowercaseStrings(stack)
console.log(stack.printStack()) // ["hello", "world", "good", "morning"]