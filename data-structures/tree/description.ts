export default `#### Summary
A tree is a hierarchical data structure that consists of nodes connected by edges.

Each node can have zero or more child nodes, except for the root node, which has no parent node.

Trees are useful for when we need to represent data in a way that shows a hierarchical relationship between elements.

For example, in a file system, we can use a tree to represent the directory structure, with each directory being a node and each file being a leaf node.

#### Operations
A tree has several operations, including:

Insert: Adding a new node to the tree.

Delete: Removing a node and its child nodes from the tree.

Traversal: Visiting each node in the tree in a specific order.

Search: Finding a node with a specific value in the tree.

#### Implementation

We can implement a tree using nodes and edges.

Each node has a value and a list of child nodes.

The root node is the top-level node in the tree, and all other nodes are descendants of the root node.

Here is an example of a binary search tree implemented using nodes:
${"```javascript"}
// Creating a binary search tree 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if (value <= this.value) {
            if (this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }
    contains(value) {
        if (value === this.value) {
            return true;
        } else if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }
} // Adding elements to the binary search tree

const tree = new Node(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(20);
// Searching for elements in the binary search tree
const found1 = tree.contains(8);
const found2 = tree.contains(25);

console.log(found1); // will display true 
console.log(found2); // will display false
${"```"}
### Videos
[Trees in 5 minutes](https://www.youtube.com/watch?v=qH6yxkw0u78)

[Binary Search Trees - Part 1](https://www.youtube.com/watch?v=Zaf8EOVa72I)
`;
