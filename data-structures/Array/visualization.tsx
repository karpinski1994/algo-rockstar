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
      <div className="d-flex justify-content-center">
        <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} />
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false}/>
      </div>
      <p>"Arrays" are one type of data structure, and can store multiple values.</p>
    </div>
  ),
    //step 2
    ( <div>
      <div className="d-flex justify-content-center">
        <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
      </div>
      <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
    </div>
  ),
    //step 3
    ( <div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <NodeBox name="blue" color={[40, 148, 255, 1]}  arrow={false} pointed={true}/>
        <NodeBox name="yellow" color={[255, 171, 1, 1]}  arrow={false} pointed={true}/>
        <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} pointed={true}/>
      </div>
    <p>Data is stored sequentially in memory in consecutive locations.</p>
  </div>
  ),
    //step 4
    ( <div>
      <div className="d-flex justify-content-center">
        <NodeBox name="blue" color={[170, 170, 170, 1]} arrow={false} label={'[a0]'}/>
        <NodeBox name="yellow" color={[170, 170, 170, 1]} arrow={false} label={'[a1]'}/>
        <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false} label={'[a2]'}/>
      </div>
      <p>Because they're stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.</p>
    </div>
  ),
      //step 5
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[170, 170, 170, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[170, 170, 170, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
      </div>
    ),
      //step 6
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[170, 170, 170, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
      </div>
    ),
      //step 7
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[170, 170, 170, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[170, 170, 170, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
      </div>
    ),
      //step 8
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <p>Each element can be accessed through its index (a number that denotes its order within the data).</p>
      </div>
    ),
      //step 9
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <p>Another feature of arrays is that adding or deleting data in a specific location carries a high cost compared to lists.</p>
      </div>
    ),
      //step 10
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
        </div>
        <div className="position-relative start-50">
          <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
        </div>
        <p>Let's imagine adding "Green" to the 2nd location.</p>
      </div>
    ),
      //step 11
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a2]'}/>
          <NodeBox color={[255, 255, 255, 1]} arrow={false} label={'[a3]'}/>
        </div>
        <div className="position-relative start-50">
          <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
        </div>
        <p>First we secure an additional space at the end of the array.</p>
      </div>
    ),
      //step 12
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox color={[255, 255, 255, 1]} arrow={false} label={'[a2]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a3]'}/>
        </div>
        <div className="position-relative start-50">
          <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
        </div>
        <p>In order to free up the space needed for the addition, data is shifted one element at a time.</p>
      </div>
    ),
      //step 13
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox color={[255, 255, 255, 1]} arrow={false} label={'[a1]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a2]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a3]'}/>
        </div>
        <div className="position-relative start-50">
          <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} pointed={true}/>
        </div>
        <p>In order to free up the space needed for the addition, data is shifted one element at a time.</p>
      </div>
    ),
      //step 14
      ( <div>
        <div className="d-flex justify-content-center">
          <NodeBox name="blue" color={[40, 148, 255, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="green" color={[12, 180, 0, 1]} arrow={false} label={'[a0]'}/>
          <NodeBox name="yellow" color={[255, 171, 1, 1]} arrow={false} label={'[a2]'}/>
          <NodeBox name="red" color={[226, 35, 35, 1]} arrow={false} label={'[a3]'}/>
        </div>
        <p>In order to free up the space needed for the addition, data is shifted one element at a time.</p>
      </div>
    ),


]