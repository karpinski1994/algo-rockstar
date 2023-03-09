import React from 'react'
import { Graph } from "react-d3-graph";

const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};


const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    labelProperty: "id",
    highlightStrokeColor: "blue",
  },
  link: {
    type: "CURVE_SMOOTH",
    highlightColor: "lightblue",
  },
};

const onClickNode = function (nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const GraphVisualization = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}
    >
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </div>
  )
}

export default GraphVisualization