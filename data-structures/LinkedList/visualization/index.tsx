import NodeBox from '@/components/NodeBox/NodeBox'
import React from 'react'

function LinkedlistVisualization({stepIndex}) {
  return (
          steps[stepIndex]
  )
}

export default LinkedlistVisualization

const steps = [
  //step 1
  ( <div>
      <div className="d-flex">
          <NodeBox name="swinia" color={[22, 144, 155, 1]} pointed={true}/>
          <NodeBox name="krowa" color={[122, 144, 155, 1]} />
          <NodeBox name="kura" color={[122, 144, 155, 1]} arrow={false}/>
      </div>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>

  ),
  //step 2
  ( <div>
    <div className="d-flex">
        <NodeBox name="swinia" color={[252, 24, 25, 1]} />
        <NodeBox name="krowa" color={[92, 255, 15, 1]} />
        <NodeBox name="kura" color={[222, 225, 255, 1]} />
    </div>
    <h3>Second slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </div>

),
]