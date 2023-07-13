import React from "react";
import useRenderGraph from "@/hooks/useRenderGraph";

function GraphVisualization({ data }) {
  const { svgRef, wrapperRef } = useRenderGraph(data);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          ref={svgRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        ></svg>
      </div>
    </div>
  );
}

export default React.memo(GraphVisualization);
