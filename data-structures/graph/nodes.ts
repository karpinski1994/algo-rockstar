import { select, forceLink, forceManyBody, forceCenter, forceSimulation } from "d3";

export function nodes(svg, graphData, wrapperRef) {
  const { width, height } = wrapperRef.current.getBoundingClientRect();

  const simulation = forceLink(graphData.links)
    .id((d) => d.id)
    .distance(100) // Set the desired link distance
    .iterations(1) // Set the number of iterations to 1 to disable the animation

  const force = forceSimulation(graphData.nodes)
    .force("link", simulation)
    .force("charge", forceManyBody().strength(-400))
    .force("center", forceCenter(width / 2, height / 2));

  const links = svg
    .selectAll(".link")
    .data(graphData.links)
    .enter()
    .append("line")
    .attr("class", "link")
    .style("stroke", "#aaa");

  const nodes = svg
    .selectAll(".node")
    .data(graphData.nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .style("fill", "#69b3a2")
    .on("click", function (event, d) {
      console.log("Clicked on node:", d);
    });

  const texts = svg
    .selectAll(".text")
    .data(graphData.nodes)
    .enter()
    .append("text")
    .attr("class", "text")
    .text((d) => d.name)
    .attr("dy", 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "white");

  // Remove the ticked function

  force.on("tick", () => {
    links
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    nodes
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y);

    texts
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y);
  });
}
