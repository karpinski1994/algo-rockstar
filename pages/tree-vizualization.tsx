import React, { useRef, useEffect } from "react";
import { select, hierarchy, tree, linkHorizontal, linkVertical, curveLinear, link, curveBumpY } from "d3";
import useResizeObserver from "@/hooks/useResizeObserver";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const initialData = {
    name: "😐",
    children: [
        {
            name: "🙂",
            children: [
                {
                    name: "😀"
                },
                {
                    name: "😁"
                },
                {
                    name: "🤣"
                },

            ]
        },
        {
            name: "😔"
        },

    ]
};

function TreeVizualization({ data = initialData }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    // we save data to see if it changed
    const previouslyRenderedData = usePrevious(data);

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        // use dimensions from useResizeObserver,
        // but use getBoundingClientRect on initial render
        // (dimensions are null for the first render)
        const { width, height } = wrapperRef.current.getBoundingClientRect();

        // transform hierarchical data
        const root = hierarchy(data);
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
            .attr("fill", "white")
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
            .attr("fill", "black");

        // Links
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

    }, [data, dimensions, previouslyRenderedData]);

    return (
        <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
            <svg className=" w-100 h-100" ref={svgRef}></svg>
        </div>
    );
}

export default TreeVizualization;