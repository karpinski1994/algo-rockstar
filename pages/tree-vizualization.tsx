import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";
import useResizeObserver from "@/hooks/useResizeObserver";
import treeVisualizationSteps from "@/data-structures/tree/visualization";
import nodes from "@/data-structures/tree/nodes";

//TODO: temporary set index 0. Create more steps and use map in the future
const treeData = treeVisualizationSteps[0];

function TreeVizualization() {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    nodes(svg, treeData, wrapperRef);
  }, [treeData, dimensions]);

  return (
    <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
      <svg className=" w-100 h-100" ref={svgRef}></svg>
    </div>
  );
}

export default TreeVizualization;
