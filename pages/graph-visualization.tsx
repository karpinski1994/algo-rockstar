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

function GraphVisualization() {

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Steps>
        {data.map(d => <Step>
          <GraphExperiment data={d} />
        </Step>)}
        <Step>
          <div>
            zyrafa
          </div>
        </Step>
      </Steps>
    </div>
  );
}

export default GraphVisualization;
