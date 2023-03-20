export default `#### Summary
A graph is a collection of nodes (vertices) and edges that connect them.

In a graph, each node can be connected to any other node through one or more edges.

Graphs are useful for representing complex relationships between data points.

For example, in a social network, a graph can be used to represent the relationships between users, 
with each user being a node and each friendship being an edge.

#### Operations
A graph has several operations, including:

Insert: Adding a new node or edge to the graph.

Delete: Removing a node or edge from the graph.

Traversal: Visiting each node or edge in the graph in a specific order.

Search: Finding a node or edge with a specific value in the graph.

#### Implementation
We can implement a graph using adjacency lists or adjacency matrices.

In an adjacency list, we represent the graph as an array of linked lists. 
Each node in the graph has an associated linked list that contains the nodes it is connected to.

In an adjacency matrix, we represent the graph as a 2D array. 
Each row and column in the array represents a node in the graph, and the value at each position in the array represents 
whether there is an edge between the nodes.

Here is an example of a graph implemented using an adjacency list:
${"```javascript"}
class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }
    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() {
        const connections = Object.keys(this.adjacencyList).map(node => {
            const connectedNodes = this.adjacencyList[node].join(", ");
            return node + ' --> ' + connectedNodes';
        });
        console.log(connections.join("\n"));
    }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.showConnections();
${"```"}
### Videos
[Graphs in 5 minutes](https://www.youtube.com/watch?v=gXgEDyodOJU)

[Graphs and Graph Algorithms](https://www.youtube.com/watch?v=zaBhtODEL0w)
`;
