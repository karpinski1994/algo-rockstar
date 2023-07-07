import React from "react";
import treeVisualizationSteps from "@/data-structures/tree/visualization";
import useRenderTree from "@/hooks/useRenderTree";

//TODO: temporary set index 0. Create more steps and use map in the future
const data = treeVisualizationSteps[0];

function TreeVizualization() {
  const { svgRef, wrapperRef } = useRenderTree(data);

  return (
    <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
      <svg className="w-100 h-100" ref={svgRef}></svg>
    </div>
  );
}

export default TreeVizualization;
