import React from "react";
// import treeVisualizationSteps from "@/data-structures/tree/visualization";
import useRenderD3 from "@/hooks/useRenderD3";

//TODO: temporary set index 0. Create more steps and use map in the future
// const data = treeVisualizationSteps[0];
// console.log("🚀 ~ file: tree-vizualization.tsx:7 ~ data:", data)

function TreeVizualization({data}) {
  const { svgRef, wrapperRef } = useRenderD3(data);

  return (
    <div ref={wrapperRef} className="pt-8 mt-3 w-100 h-100">
      <svg className="w-100 h-100" ref={svgRef}></svg>
    </div>
  );
}

export default React.memo(TreeVizualization);
