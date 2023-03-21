import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function NetworkGraph({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id((d) => d.id)
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', (d) => Math.sqrt(d.value));

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('g');

    node
      .append('circle')
      .attr('r', 5)
      .attr('fill', 'steelblue')
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node
      .append('text')
      .attr('dy', '.35em')
      .text((d) => d.id);

    simulation.nodes(data.nodes).on('tick', () => {
      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
    });

    simulation.force('link').links(data.links);
  }, [data]);

  return (
    <svg ref={ref} width="600" height="400">
      <g className="links"></g>
      <g className="nodes"></g>
    </svg>
  );
}

export default NetworkGraph;
