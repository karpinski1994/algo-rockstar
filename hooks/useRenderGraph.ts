import { useRef, useEffect } from "react";
import { select } from "d3";
import {nodes} from "@/data-structures/graph/nodes";
import useResizeObserver from "./useResizeObserver";

function useRenderGraph(data: any) {
  const svgRef = useRef<any>();
  const wrapperRef = useRef<any>();

  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    nodes(svg, data, wrapperRef);
  }, [data, dimensions]);

  return { svgRef, wrapperRef };
}

export default useRenderGraph;
