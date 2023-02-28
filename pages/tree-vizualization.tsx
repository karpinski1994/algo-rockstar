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
                }
            ]
        },
        {
            name: "😔"
        }
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
        const treeLayout = tree().size([width, height - 20]);
        function linkArc(d) {
            return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        }
        const linkGenerator = link(curveBumpY)
            .x(d => d.x)
            .y(d => d.y);


        // enrich hierarchical data with coordinates
        treeLayout(root);
        // nodes
        svg
            .selectAll(".node")
            .data(root.descendants())
            .join(enter => enter.append("circle").attr("opacity", 0))
            .attr("class", "node")
            .attr("cx", node => node.x)
            .attr("cy", node => node.y + 10)
            .attr("r", 20)
            .on("click", function (event, node) {
                console.log("Clicked on node:", node);
            })
            .transition()
            .duration(500)
            .delay(node => node.depth * 300)
            .attr("opacity", 1)
            ;

        function linkArc(d) {
            return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        }
        // links
        svg.selectAll(".link")
            .data(root.links())
            .join("path")
            .attr("class", "link")
            .attr("d", linkArc)
            .attr("stroke", "black")
            .attr("fill", "none")
            .attr("opacity", 1)
        // .attr('d', elbow)


    }, [data, dimensions, previouslyRenderedData]);

    return (
        <div ref={wrapperRef} className="mt-3 w-100 h-100">
            <svg className=" w-100 h-100" ref={svgRef}></svg>
        </div>
    );
}

export default TreeVizualization;