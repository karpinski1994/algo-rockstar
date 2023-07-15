import { useRef, useEffect } from "react";
import { select, forceLink, forceManyBody, forceCenter, forceSimulation } from "d3";

function useRenderGraph(data, onClick) {
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const renderGraph = () => {
      const svg = select(svgRef.current);
      const { width, height } = wrapperRef.current.getBoundingClientRect();

      const simulation = forceLink(data.links)
        .id((d) => d.id)
        .distance(100)
        .iterations(1);

      const force = forceSimulation(data.nodes)
        .force("link", simulation)
        .force("charge", forceManyBody().strength(-400))
        .force("center", forceCenter(width / 2, height / 2));

      const links = svg.selectAll(".link").data(data.links);
      links
        .enter()
        .append("line")
        .attr("class", "link")
        .merge(links)
        .style("stroke", "#aaa");

      const nodes = svg.selectAll(".node").data(data.nodes);
      nodes
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 20)
        .merge(nodes)
        .style("fill", ({ selected }) => (selected ? "#eee000" : "#69b3a2"))
        .on("click", (event, d) => {
          onClick(d);
          console.log("Clicked on node:", d);
        });

      const texts = svg.selectAll(".text").data(data.nodes);
      texts
        .enter()
        .append("text")
        .attr("class", "text")
        .merge(texts)
        .text((d) => d.name)
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "white");

      force.on("tick", () => {
        links
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        nodes.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        texts.attr("x", (d) => d.x).attr("y", (d) => d.y);
      });
    };

    if (svgRef.current && data) {
      renderGraph();
    }
  }, [data, onClick]);

  return { svgRef, wrapperRef };
}

export default useRenderGraph;
