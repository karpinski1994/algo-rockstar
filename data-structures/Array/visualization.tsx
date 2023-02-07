import NodeBox from '@/components/NodeBox/NodeBox'
import React from 'react'

function ArrayVisualization({stepIndex}) {
  return (
          steps[stepIndex]
  )
}

export default ArrayVisualization

const steps = [
  //step 1
  ( <div>
      <div className="d-flex">
        <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} />
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
      </div>
      <p>"Arrays" are one type of data structure, and can store multiple values.</p>
    </div>
  ),
    //step 2
    ( <div>
      <div className="d-flex">
        <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false}  label={'[a0]'}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} />
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
      </div>
      <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
    </div>
  ),

]