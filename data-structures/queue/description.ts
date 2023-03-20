export default `#### Summary

A queue is like a line of people waiting for something, where the person at the front is the first one to be served. People join the line at the back and leave the line from the front.

A queue is a way to store a collection of items, similar to an array or a list. However, unlike an array or a list, a queue follows the "first-in, first-out" (FIFO) principle. This means that the first item added to the queue is the first one to be removed.

A queue has two ends: the front and the rear. Items are added to the rear end and removed from the front end. The front end is also sometimes called the "head" of the queue, and the rear end is called the "tail".

Queues are useful when you want to process items in the order they were added, like a message queue or a print queue.

#### Operations
The most common operations performed on queues are:

Enqueue O(1): Adding an item to the rear end of the queue.

Dequeue O(1): Removing an item from the front end of the queue.

Peek O(1): Looking at the front item of the queue without removing it.

IsEmpty O(1): Checking if the queue is empty.

IsFull O(1): Checking if the queue is full (in the case of a fixed-size queue).

Size O(1): Finding the number of items in the queue.


#### Example

Here's an example of using a queue to process items in order.

In this example, we create an empty queue represented by an array queue.

Then, we add three items to the queue using the push() method.

Finally, we process the items in the queue using a while loop, where we remove items from the front of the queue using the shift() method and log them to the console.

${'```javascript'}
// Creating an empty queue
const queue = [];

// Adding items to the queue
queue.push("first item");
queue.push("second item");
queue.push("third item");

// Processing items in the queue
while (queue.length > 0) {
  const currentItem = queue.shift();
  console.log(currentItem);
}

// Output:
// "first item"
// "second item"
// "third item"

${"```"}

### Videos
[Queue in 3 minutes](https://www.youtube.com/watch?v=D6gu-_tmEpQ)

[Queue Introduction](https://www.youtube.com/watch?v=KxzhEQ-zpDc)
`