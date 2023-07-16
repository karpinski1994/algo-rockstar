import React from "react";
import useRenderGraph from "@/hooks/useRenderGraph";
import Steps, { Step } from "@/components/Steps";
import GraphExperiment from "@/components/GraphExperiment";

const data = [
  {
    name: "A",
    children: [
    ]
  },
  {
    name: "A",
    children: [
      {
        name: "B",
        children: []
      }
    ]
  },
  {
    name: "A",
    children: [
      {
        name: "B",
        children: []
      },
      {
        name: "C",
        children: []
      }
    ]
  },
  {
    name: 'A',
    children: [
      {
        name: 'B',
        children: [
          { name: 'C', children: [{ name: 'D', children: [] }] },
          { name: 'F', children: [] },
        ],
      },
      {
        name: 'E',
        children: [],
      },
    ],
  },
  {
    name: "A",
    children: [
        {
            name: "B",
            children: [
                {
                    name: "C"
                },
                {
                    name: "D"
                },
                {
                    name: "E"
                }
            ]
        },
        {
            name: "F"
        },
        {
            name: "G",
            children: [
                {
                    name: "H"
                },
                {
                    name: "I"
                },
                {
                    name: "J"
                }
            ]
        }
    ]
  }

]

function GraphVisualization({ data, onClick }) {
  const { svgRef, wrapperRef } = useRenderGraph(data, onClick);
  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: "480px",
        }}
      ></svg>
    </div>
  );
}

export default GraphVisualization;
