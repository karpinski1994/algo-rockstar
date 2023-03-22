import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree, linkHorizontal, linkVertical, curveLinear, link, curveBumpY } from "d3";
import useResizeObserver from "@/hooks/useResizeObserver";
import treeVisualizationSteps from "@/data-structures/tree/visualization";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

{`TODO: temporary set index 0. Create more steps and use map in the future`}
const initialData = treeVisualizationSteps[0];

function TreeVizualization() {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [input, setInput] = useState('');
    const [treeData, setTreeData] = useState(initialData);

    // we save data to see if it changed
    const previouslyRenderedData = usePrevious(treeData);

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        // use dimensions from useResizeObserver,
        // but use getBoundingClientRect on initial render
        // (dimensions are null for the first render)
        const { width, height } = wrapperRef.current.getBoundingClientRect();

        // transform hierarchical data
        const root = hierarchy(treeData);
        const treeLayout = tree().size([width, height - 80]);

        treeLayout(root);
        const nodes = svg
            .selectAll(".node")
            .data(root.descendants())
            .join("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${d.x},${d.y + 30})`);

        nodes
            .append("circle")
            .attr("r", 20)
            .attr("fill", "lightblue")
            .attr("stroke", "black")
            .attr("stroke-width", "2")
            .on("click", function (event, d) {
                console.log("Clicked on node:", d);
            })
            .transition()
            .duration(500)
            .delay(d => d.depth * 300)
            .attr("opacity", 0.5);

        nodes
            .append("text")
            .text(d => d.data.name)
            .attr("dy", 5)
            .attr("text-anchor", "middle")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .attr("fill", "black");

        // Links
        // explain me this
        svg
            .selectAll(".link")
            .data(root.links())
            .join("path")
            .attr("class", "link")
            .attr("d", d => {
                const source = { x: d.source.x, y: d.source.y + 50 };
                const target = { x: d.target.x, y: d.target.y };
                return `M${source.x},${source.y} L${target.x},${target.y + 10}`;
            })
            .attr("stroke", "black")
            .attr("fill", "none")
            .attr("opacity", 1);

    }, [treeData, dimensions, previouslyRenderedData]);

    const handleOnChange = (e) => {
        console.log('e: ',e.target.value)
        setInput(e.target.value)
    }

    const handleOnClick = () => {
        const newTree = {...treeData};
        newTree.children[0].children[1].children = [];
        newTree.children[0].children[1].children.push({name: input})
        setTreeData(newTree)
    }

    return (
        <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
            <input type="number" onChange={(e) => handleOnChange(e)}/>
            <button onClick={handleOnClick}>Submit</button>
            <svg className=" w-100 h-100" ref={svgRef}></svg>
        </div>
    );
}

export default TreeVizualization;