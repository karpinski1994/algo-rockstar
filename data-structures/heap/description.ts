export default `#### Summary
A heap is a data structure that represents a complete binary tree where every node satisfies the heap property.

The heap property states that for a max heap, every parent node has a value greater than or equal to its children, and for a min heap, every parent node has a value less than or equal to its children.

Heaps are useful for when we need to efficiently maintain the maximum or minimum element of a set, such as in a priority queue.

#### Operations
A heap has several operations, including:

Insert: Adding a new element to the heap while maintaining the heap property.

Delete: Removing the maximum or minimum element from the heap while maintaining the heap property.

Peek: Returning the maximum or minimum element of the heap without removing it.

#### Implementation
We can implement a heap using an array, where the parent node of a given index i is located at index floor((i-1)/2), and its left and right children are located at indices 2i+1 and 2i+2, respectively.

To insert an element, we add it to the end of the array and then swap it with its parent until the heap property is satisfied.

To delete the maximum or minimum element, we swap it with the last element in the array, remove the last element, and then swap the new root with its largest or smallest child until the heap property is satisfied.

Here is an example of a max heap implemented using an array:
${"```javascript"}
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    delete() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            let index = 0;
            while (index < this.heap.length) {
                const leftIndex = 2 * index + 1;
                const rightIndex = 2 * index + 2;
                let largerIndex = leftIndex;
                if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[leftIndex]) {
                    largerIndex = rightIndex;
                }
                if (largerIndex < this.heap.length && this.heap[largerIndex] > this.heap[index]) {
                    [this.heap[index], this.heap[largerIndex]] = [this.heap[largerIndex], this.heap[index]];
                    index = largerIndex;
                } else {
                    break;
                }
            }
        }
        return max;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(15);
heap.insert(8);
heap.insert(3);
heap.insert(20);

console.log(heap.delete()); // will display 20
console.log(heap.peek()); // will display 15
${"```"}
### Videos
[Heaps in 5 minutes](https://www.youtube.com/watch?v=t0Cq6tVNRBA)

[Heap - Data Structures in Javascript](https://www.youtube.com/watch?v=hzxa4psfxxg)
`;
