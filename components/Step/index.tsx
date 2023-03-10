import React from 'react'

type Props = {
    // TODO: Remove any
    nodes: any;
    text: string;
    orientation?: 'row' | 'column';
    label?: string;
}

function Step({ text, nodes, orientation="row", label='' }: Props) {
    return (
        <div className='d-flex flex-column'>
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
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Step