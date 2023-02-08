import NodeBox from '@/components/NodeBox/NodeBox'
import React from 'react'


const stepsSettings = [
  {
    stepId: 0,
    text: '"Lists" are one type of data structure, and can storemultiple values',
    nodes: [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: false,
      },
      {
        name: 'blue',
        color: [50, 18, 255, 1],
        arrow: false,
      },
      {
        name: 'blue',
        color: [150, 180, 55, 1],
        arrow: false,
      }
    ]
  },
  {
    stepId: 1,
    text: 'Second description',
    nodes: [
      {
        name: 'blue',
        color: [60, 48, 5, 1],
        arrow: false,
      },
      {
        name: 'blue',
        color: [200, 73, 255, 1],
        arrow: false,
      },
      {
        name: 'blue',
        color: [255, 12, 155, 1],
        arrow: false,
      }
    ]
  }

]


const Step = ({ nodes, text }) => (
  <div>
    <div className="d-flex flex-column flex-md-row justify-content-center">
      {nodes.map(({ name, color, arrow }) =>
        <NodeBox name={name} color={color} arrow={arrow} />
      )}
    </div>
    <p>{text}</p>
  </div >
)
// TODO: This is wrong visualization must be common and generic
// we pass some kind of steps that are dynamically chosen by route
// look at /Users/karpinski94/projects/algo-rockstar/components/CodeExample
// or /Users/karpinski94/projects/algo-rockstar/components/Visualization
// and just copy the architecture
function LinkedlistVisualization() {
  const stepId = 0;
  return stepsSettings && stepsSettings[stepId] && <Step {...stepsSettings[stepId]} />
   
}

export default LinkedlistVisualization