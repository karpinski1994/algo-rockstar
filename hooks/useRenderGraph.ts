import { useRef, useEffect } from "react";
import { select } from "d3";
import {nodes} from "@/data-structures/graph/nodes";
// import useResizeObserver from "./useResizeObserver";


function useRenderGraph(data) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  // TODO: Base on getBoundingClientRect width and height
  
  useEffect(() => {
    const svg = select(svgRef.current);
    nodes(svg, data);
  }, [data]);

  return { svgRef, wrapperRef };
}

export default useRenderGraph;
