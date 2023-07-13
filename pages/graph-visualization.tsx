import React from "react";
import graphVisualizationSteps from "@/data-structures/graph/visualization";
import useRenderGraph from "@/hooks/useRenderGraph";

//TODO: temporary set index 0. Create more steps and use map in the future
const data = graphVisualizationSteps[0];

function GraphVizualization() {
  const { svgRef, wrapperRef } = useRenderGraph(data);

  return (
    <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
      <svg className="w-100 h-100" ref={svgRef}></svg>
    </div>
  );
}

export default GraphVizualization;
