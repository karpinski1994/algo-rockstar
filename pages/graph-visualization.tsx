import NetworkGraph from '@/components/ForceTreeChart';
import ForceTreeChart from '@/components/ForceTreeChart'
import React from 'react'

const graphData = {
  nodes: [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
  ],
  links: [
    { source: 'A', target: 'B', value: 1 },
    { source: 'A', target: 'C', value: 1 },
    { source: 'B', target: 'C', value: 1 },
    { source: 'D', target: 'E', value: 1 },
  ],
};

const GraphVisualization = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}
    >
      <NetworkGraph data={graphData}/>
    </div>
  )
}

export default GraphVisualization