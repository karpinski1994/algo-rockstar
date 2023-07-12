class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(origin, destination) {
        this.adjacencyList.get(origin).push(destination);
        this.adjacencyList.get(destination).push(origin);
    }
}