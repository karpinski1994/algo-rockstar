import React, { useEffect } from "react";
import { DataStructurePageLayout } from "../..";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import GraphExperiment from "@/components/GraphExperiment";
import Markdown from "@/components/Markdown";


const data = {
  name: "A",
  children: [
      {
          name: "B",
          children: [
              {
                  name: "C"
              },
              {
                  name: "D"
              },
              {
                  name: "E"
              }
          ]
      },
      {
          name: "F"
      },
      {
          name: "G",
          children: [
              {
                  name: "H"
              },
              {
                  name: "I"
              },
              {
                  name: "J"
              }
          ]
      }
  ]
};

function GraphBFSPage() {

  const router = useRouter();

  return (
    <div>
      <Nav.Link onClick={() => router.back()}>{"< back to the list"}</Nav.Link>
      <h1>Graph - BFS</h1>
      <h4>Description</h4>
      <p>
        Breath first search it is one of the most fundamental graph traversal algorithms
      </p>
      <p>
        In this type of traversal we visit nodes layer by layer. We choose a starting node. Then we visit its siblings / adjacent nodes.
        Then siblings of the siblings, until the end of our graph.
      </p>
      <p>
        Usually BFS is implemented with queue data structure and two loops.
        Outer loop corresponds to currently visited node.
        Inner loop goes through siblings /adjacent  nodes of currently visited node.
      </p>
      <p>
        Firstly we add our staring node to the queue.
        So long as there are items in the queue we iterate through them.
      </p>
      <p>
        We take off first element from the queue - this element will be our currently visited node of which children we will traverse.
      </p>
      <p>
        Unlike in linear data structures in graph traversal it's easy to get lost.
        Visiting the same nodes more than once can end in endless loop and stack overflow.
        That's why we have to keep track of the visited nodes.
      </p>
      <p>
        Therefore in the inner loop we check wheter node has not been visited, then we add it to the queue.
        Then we mark it as visited by adding visited Array or Set.
      </p>


      <h4>
        BFS pseudo code
      </h4>
      <pre>
        <code>
          {
            `
                declare visited and queue
                add starting node to the queue
                while there are elements in the queue
                  take first element from queue and make it current node
                  process current node
                  for every sibling of current node
                    if sibling was not visited
                      add sibling to the queue
                      add sibling to the visited`
          }

        </code>
      </pre>
      <h4>
        BFS code
      </h4>
<Markdown markdown={`
                function bfs (graph, startingNode) {
                  const visited = new Set();
                  const queue = [startingNode];
                  const bfsOrder = [];
                  
                  while(queue.length > 0) {
                    const currentNode = queue.shift();
                    visited.add(currentNode)
                    
                    // process current node
                    bfsOrder.push(currentNode)

                    const siblings = graph[currentNode];

                    for (const sibling of siblings) {
                      if(!visited.has(sibling)) {
                        visited.add(sibling);
                        queue.push(sibling);
                      }
                    }

                  }
                  return bfsOrder;
                }`} />
      
      <GraphExperiment data={data}/>
    </div>
  );
}

GraphBFSPage.getLayout = DataStructurePageLayout;

export default GraphBFSPage;
