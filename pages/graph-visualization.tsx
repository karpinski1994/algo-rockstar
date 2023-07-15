import React from "react";
import useRenderGraph from "@/hooks/useRenderGraph";

function GraphVisualization({ data, onClick }) {
  const { svgRef, wrapperRef } = useRenderGraph(data, onClick);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        ref={svgRef}
        style={{
          width: "480px",
          height: "440px",
        }}
      ></svg>
    </div>
  );
}

export default GraphVisualization;
