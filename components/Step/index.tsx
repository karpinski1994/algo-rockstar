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
            <div className='d-flex flex-column flex-md-row'>
                {
                    // TODO: This has to be changed color should be not passed as an array
                    nodes && nodes.map(({ color, name }: { color: Array<number>, name: 'string' }) => (
                        <NodeBox key={name + color} name={name} color={color} />
                    ))
                }
            </div>
        </div>
    )
}

export default Step