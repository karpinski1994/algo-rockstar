import React from 'react'
import NodeBox from '../NodeBox/NodeBox'

type Props = {
    // TODO: Remove any
    nodes: any;
    text: string;
}

function Step({ text, nodes }: Props) {
    return (
        <div className='d-flex flex-column'>
            <h2>Step Description:</h2>
            <p>{text}</p>
            <div className='d-flex flex-row'>
                {
                    // TODO: This has to be changed color should be not passed as an array
                    nodes && nodes.map(({ color, name, arrow, pointer, pointed }
                        : { color: Array<number>, 
                            name: string, 
                            arrow: boolean, 
                            pointer: boolean, 
                            pointed: boolean }) => (
                        <NodeBox key={name + color}
                         name={name} 
                         color={color} 
                         arrow={arrow} 
                         pointer={pointer} 
                         pointed={pointed}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Step