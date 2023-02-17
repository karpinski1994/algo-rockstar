import React from 'react'
import NodeBox from '../NodeBox/NodeBox'

type Props = {
    // TODO: Remove any
    nodes: any;
    text: string;
    orientation?: 'row' | 'column';
    label?: string;
}

function Step({ text, nodes, orientation="row", label='' }: Props) {
    console.log(label);
    return (
        <div className='d-flex flex-column'>
            <h2>Step Description:</h2>
            <p>{text}</p>
            {label?<div style={{border:"2px solid black"}}>{label}</div>:null}
            <div className={`d-flex flex-${orientation} ${orientation=='column'?'align-items-center':null}`}>
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