
export default {
    javascript: `
    class UndirectedGraph {
      constructor() {
        this.vertices = new Map();
      }
    
      addVertex(vertex) {
        this.vertices.set(vertex, []);
      }
    
      addEdge(origin, destination) {
        this.vertices.get(origin).push(destination);
        this.vertices.get(destination).push(origin);
      }
    
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this.vertices;
      }
    }
    
    const graph = new UndirectedGraph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(1, 2);
    graph.addEdge(3, 4);
    graph.addEdge(3, 1);
    graph.addEdge(3, 2);
    graph.addEdge(4, 2);
    console.log(graph);
    
    /*
        Map(4) {
            1 => [ 2, 3 ],
            2 => [ 1, 3, 4 ],
            3 => [ 4, 1, 2 ],
            4 => [ 3, 2 ]
          }
      */`,
}