import { hierarchy, tree } from "d3";

function nodes(svg, treeData, wrapperRef) {
  const { width, height } = wrapperRef.current.getBoundingClientRect();
  const root = hierarchy(treeData);
  const treeLayout = tree().size([width, height - 80]);

  treeLayout(root);

  const nodes = svg
    .selectAll(".node")
    .data(root.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", (d) => `translate(${d.x},${d.y + 30})`);

  nodes
    .append("circle")
    .attr("r", 20)
    .attr("fill", "lightblue")
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .on("click", function (event, d) {
      console.log("Clicked on node:", d);
    })
    .transition()
    .duration(500)
    .delay((d) => d.depth * 300)
    .attr("opacity", 0.5);

  nodes
    .append("text")
    .text((d) => d.data.name)
    .attr("dy", 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "black");

  // Links
  // explain me this
  svg
    .selectAll(".link")
    .data(root.links())
    .join("path")
    .attr("class", "link")
    .attr("d", (d) => {
      const source = { x: d.source.x, y: d.source.y + 50 };
      const target = { x: d.target.x, y: d.target.y };
      return `M${source.x},${source.y} L${target.x},${target.y + 10}`;
    })
    .attr("stroke", "black")
    .attr("fill", "none")
    .attr("opacity", 1);
}

export default nodes;
