import { useRef, useEffect } from "react";
import { select } from "d3";
import {nodes} from "@/data-structures/graph/nodes";
// import useResizeObserver from "./useResizeObserver";


function useRenderGraph(data) {
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const { width, height } = wrapperRef.current.getBoundingClientRect();
    svg.attr("width", width).attr("height", height);

    nodes(svg, data, wrapperRef);
  }, [data]);

  return { svgRef, wrapperRef };
}

export default useRenderGraph;
