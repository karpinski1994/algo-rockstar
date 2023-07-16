import React, { useRef, useEffect, useState } from "react";
import {
    select,
    hierarchy,
    forceSimulation,
    forceManyBody,
    pointer,
    forceX,
    forceY,
    forceCollide,
    forceRadial,
} from "d3";
import useResizeObserver from "@/hooks/useResizeObserver";
import { Button } from "react-bootstrap";

/**
 * Component, that renders a force layout for hierarchical data.
 */

function GraphExperiment({data}) {
    const [nodes, setNodes] = useState(data);
    const [visited, setVisited] = useState([]);
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    const dfs = (node, targetName) => {
        if (node.name === targetName) {
            return node;
        }

        if (node.children) {
            for (const child of node.children) {
                const result = dfs(child, targetName);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    };

    const onClick = () => {
        const visited = new Set(); // Set to track visited nodes
        const queue = [nodes]; // Queue to store nodes for BFS traversal

        while (queue.length > 0) {
            console.log("🚀 ~ file: graph-experiment.tsx:88 ~ onClick ~ queue:", queue)
            const currentNode = queue.shift();
            console.log("🚀 ~ file: graph-experiment.tsx:89 ~ onClick ~ currentNode:", currentNode)

            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                setTimeout(() => {
                    setVisited((visited) => [...visited, currentNode])
                    setNodes((prevNodes) => {
                        const newNodes = {...prevNodes};
                        dfs(newNodes, currentNode.name).selected = true;
                        return (newNodes)
                });
            }, 1500 * visited.size);

            if (currentNode.children) {
                currentNode.children.forEach((child) => {
                    queue.push(child);
                });
            }
        }
    }
};


useEffect(() => {
    // console.log('nodes: ', nodes)
}, [nodes])

// will be called initially and on every data change
useEffect(() => {
    if (!dimensions) return;
    const svg = select(svgRef.current);



    // centering workaround
    svg.attr("viewBox", [
        -dimensions.width / 2,
        -dimensions.height / 2,
        dimensions.width,
        dimensions.height
    ]);

    // d3 util to work with hierarchical data
    const root = hierarchy(nodes);
    const nodeData = root.descendants();
    const linkData = root.links();

    const simulation = forceSimulation(nodeData)
        .force("charge", forceManyBody().strength(-30))
        .force("collide", forceCollide(30))
        .on("tick", () => {
            // console.log("current force", simulation.alpha())


            // current alpha text
            // svg
            //   .selectAll(".alpha")
            //   .data([data])
            //   .join("text")
            //   .attr("class", "alpha")
            //   .text(simulation.alpha().toFixed(2))
            //   .attr("x", -dimensions.width / 2 + 10)
            //   .attr("y", -dimensions.height / 2 + 25);

            // links
            svg
                .selectAll(".link")
                .data(linkData)
                .join("line")
                .attr("class", "link")
                .attr("stroke", "black")
                .attr("fill", "none")
                .attr("x1", link => link.source.x)
                .attr("y1", link => link.source.y)
                .attr("x2", link => link.target.x)
                .attr("y2", link => link.target.y);

            // nodes
            svg
                .selectAll(".node")
                .data(nodeData)
                .join("circle")
                .attr("class", "node")
                .attr("r", 4)
                .attr("cx", node => node.x)
                .attr("cy", node => node.y)
                .style("fill", ({ data: { selected } }) => {
                    return (selected ? "lightgreen" : "lightblue")
                })
                .attr("r", 20)

            // .enter()
            // .append("circle")
            // .attr("class", "node")
            // .attr("r", 20)
            // .merge(nodes)


            // labels
            svg
                .selectAll(".label")
                .data(nodeData)
                .join("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("font-size", 20)
                .text(node => node.data.name)
                .attr("x", node => node.x)
                .attr("y", node => node.y);
        })
    // .on('end', function() {
    //     console.log("DZIK")
    //     svg.classed('hidden', false)
    //     // select(svgRef.current).remove()
    //   });


    // svg.on("mousemove", (event) => {
    //   const [x, y] = pointer(event);
    //   simulation
    //     .force(
    //       "x",
    //       forceX(x).strength(node => 0.2 + node.depth * 0.15)
    //     )
    //     .force(
    //       "y",
    //       forceY(y).strength(node => 0.2 + node.depth * 0.15)
    //     );
    // });

    // svg.on("click", (event) => {
    //   const [x, y] = pointer(event);
    //   simulation
    //     .alpha(0.5)
    //     .restart()
    //     .force("orbit", forceRadial(100, x, y).strength(0.8));

    // render a circle to show radial force
    //   svg
    //     .selectAll(".orbit")
    //     .data([data])
    //     .join("circle")
    //     .attr("class", "orbit")
    //     .attr("stroke", "green")
    //     .attr("fill", "none")
    //     .attr("r", 100)
    //     .attr("cx", x)
    //     .attr("cy", y);
    // });
    // not moving simulation on each tick
    for (var i = 0; i < 300; ++i) simulation.tick();

}, [nodes, dimensions]);

return (
    <div className="h-100 w-100">
          <Button
          size="lg"
          className="font-weight-bold"
          variant="dark"
          onClick={onClick}
        >
          Run Simulator
        </Button>
        <div
            ref={wrapperRef}
            style={{ marginBottom: "2rem", height: '500px', width: '100%' }}>
                <p style={{
                    marginTop: '20px'
                }}>
                Visited : {visited.map(el => <span style={{
                    border: "1px solid",
                    padding: '15px',
                    margin: '5px',
                    backgroundColor: 'lightgreen'
                }}>{el.name}</span>)}
                </p>
                
            <svg
                ref={svgRef}
            ></svg>
        </div>
    </div>

);
}

export default GraphExperiment;