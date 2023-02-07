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
        <NodeBox name="blue" color={[40, 148, 255, 1]}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} />
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
      </div>
      <p>"Lists" are one type of data structure, and can storemultiple values</p>
    </div>
  ),
  //step 2
  ( <div>
      <div className="d-flex">
        <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} pointed={true}/>
      </div>
    <p>They are unique in how they pair data with "pointers", the pointers indicating the next piece of data's memory location</p>
  </div>
),
  //step 3
  ( <div>
    <div className="d-flex flex-column align-items-center">
      <NodeBox name="blue" color={[40, 148, 255, 1]}  arrow={false} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]}  arrow={false} pointed={true}/>
      <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} pointed={true}/>
    </div>
  <p>In lists, data is stored in various disjointed locations in memory.</p>
</div>
),
  //step 4
  ( <div>
    <div className="d-flex flex-column align-items-center">
      <NodeBox name="blue" color={[40, 148, 255, 1]}  arrow={false} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]}  arrow={false} pointed={true}/>
      <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} pointed={true}/>
    </div>
  <p>In lists, data is stored in various disjointed locations in memory.</p>
</div>
),
  //step 5
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]}/>
      <NodeBox name="yellow" color={[170, 170, 170, 1]}/>
      <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false}/>
    </div>
  <p>Because data is stored in different locations,each piece of data can only be accessed through the ointer that precedes it.</p>
</div>
),
  //step 6
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
      <NodeBox name="yellow" color={[170, 170, 170, 1]}/>
      <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false}/>
    </div>
  <p>Because data is stored in different locations,each piece of data can only be accessed through the ointer that precedes it.</p>
</div>
),
  //step 7
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]}/>
      <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false}/>
    </div>
  <p>Because data is stored in different locations,each piece of data can only be accessed through the ointer that precedes it.</p>
</div>
),
  //step 8
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
      <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false}/>
    </div>
  <p>Because data is stored in different locations,each piece of data can only be accessed through the ointer that precedes it.</p>
</div>
),
  //step 9
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
      <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
    </div>
  <p>Because data is stored in different locations,each piece of data can only be accessed through the ointer that precedes it.</p>
</div>
),
  //step 10
( <div>
  <div className="d-flex">
    <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
    <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
    <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
  </div>
  <div className="position-relative start-50">
    <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
  </div>
<p>Addition of data is performed simply by replacing the pointers on either side of the addition.</p>
</div>
),
  //step 11
  ( <div>
    <div className="d-flex">
      <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
      <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
      <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
    </div>
    <div className="position-relative start-50">
      <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
    </div>
  <p>Addition of data is performed simply by replacing the pointers on either side of the addition.</p>
  </div>
  ),
    //step 12
( <div>
  <div className="d-flex">
    <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
    <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
    <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
  </div>
  <div className="position-relative start-50">
    <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
  </div>
<p>Addition of data is performed simply by replacing the pointers on either side of the addition.</p>
</div>
),
    //step 12
( <div>
  <div className="d-flex">
    <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
    <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
    <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
  </div>
  <div className="position-relative start-50">
    <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
  </div>
<p>Addition of data is performed simply by replacing the pointers on either side of the addition.</p>
</div>
),
    //step 13
    ( <div>
      <div className="d-flex">
        <NodeBox name="blue" color={[40, 148, 255, 1]} pointed={true}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} pointed={true}/>
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
      </div>
      <div className="position-relative start-50">
        <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
      </div>
    <p>This concludes the explanation of lists.</p>
    </div>
    ),
]