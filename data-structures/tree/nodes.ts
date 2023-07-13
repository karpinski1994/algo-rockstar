import { hierarchy, tree } from "d3";

function nodes(svg: any, treeData: any, wrapperRef: any) {
  const { width, height } = wrapperRef.current.getBoundingClientRect();

  const root = hierarchy(treeData);
  const treeLayout = tree().size([width, height - 230]);

  treeLayout(root);

  const nodes = svg
    .selectAll(".node")
    .data(root.descendants())
    .join("g")
    .attr("class", "node")
    .attr("transform", (d: any) => `translate(${d.x},${d.y + 30})`)
    

  nodes
    .append("circle")
    .attr("r", 20)
    // .attr("fill", "lightblue")
    // .attr("stroke", "black")
    // .attr("stroke-width", "2")
    .on("click", function (event: any, d: any) {
      console.log("Clicked on node:", d);
    })
    // .transition()
    // .duration(500)
    // .delay((d: any) => d.depth * 300)
    // .attr("opacity", 0.5)
    // .style("fill", "url(#radial-gradient)")

  nodes
    .append("text")
    .text((d: any) => d.data.name)
    .attr("dy", 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold")
    .attr("fill", "white");


  // Links
  // explain me this
  svg
    .selectAll(".link")
    .data(root.links())
    .join("path")
    .attr("class", "link")
    .attr("d", (d: any) => {
      const source = { x: d.source.x, y: d.source.y + 50 };
      const target = { x: d.target.x, y: d.target.y };
      return `M${source.x},${source.y} L${target.x},${target.y + 10}`;
    })
    .attr("stroke", "black")
    .attr("fill", "none")
    .attr("opacity", 1)

  const defs = svg.append('defs');

  //Append a radialGradient element to the defs and give it a unique id
  const radialGradient = defs.append("radialGradient")
    .attr("id", "radial-gradient")
    .attr("cx", "20%")    //The x-center of the gradient
    .attr("cy", "30%")    //The y-center of the gradient
    .attr("r", "80%");   //The radius of the gradient
  radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "blue");
  radialGradient.append("stop")
    .attr("offset", "50%")
    .attr("stop-color", "darkblue");
  radialGradient.append("stop")
    .attr("offset", "90%")
    .attr("stop-color", "#FFDA4E");
  radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FB8933");
}

export default nodes;
