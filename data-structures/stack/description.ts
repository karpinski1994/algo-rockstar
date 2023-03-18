export default `#### Summary

A stack is a data structure that works like a stack of plates. We can add plates to the top of the stack, and remove plates from the top of the stack.

The last plate added to the stack is the first one to be removed, which is also known as the Last-In-First-Out (LIFO) principle.

Stacks are useful for when you need to keep track of a sequence of items in which the most recently added item is the first one to be processed.

For example, when evaluating expressions in computer programming, we can use a stack to keep track of the order of operations.

#### Operations

A stack has two main operations:

Push: Adding a new item to the top of the stack.

Pop: Removing the top item from the stack.

In addition to these operations, we can also perform the following:

Peek: Looking at the top item on the stack without removing it.

Search: Finding an item in the stack with a specific value.


#### Implementation

We can implement a stack using an array or a linked list. When using an array, we keep track of the top of the stack using a pointer. When using a linked list, we add and remove items from the head of the list.

Here is an example of a stack implemented using an array:

${'```javascript'}
// Creating an empty stack
const stack = [];

// Adding elements to the stack
stack.push("one");
stack.push("two");
stack.push("three");

// Removing elements from the stack
const removedElement1 = stack.pop();
const removedElement2 = stack.pop();
const removedElement3 = stack.pop();

console.log(removedElement1); // will display "three"
console.log(removedElement2); // will display "two"
console.log(removedElement3); // will display "one"
${'```'}
### Videos
[Stacks in 4 minutes](https://www.youtube.com/watch?v=wjI1WNcIntg)

[Stack Data Structure - Part 1](https://www.youtube.com/watch?v=F1F2imiOJfk)
`