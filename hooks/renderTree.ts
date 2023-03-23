import { useRef, useEffect } from "react";
import { select } from "d3";
import nodes from "@/data-structures/tree/nodes";
import useResizeObserver from "./useResizeObserver";

function renderTree(data) {
  const svgRef = useRef();
  const wrapperRef = useRef();

  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    nodes(svg, data, wrapperRef);
  }, [data, dimensions]);

  return { svgRef, wrapperRef };
}

export default renderTree;
