import React from 'react'
import PointerBox from '../PointerBox/PointerBox'
import ValueBox from '../ValueBox/ValueBox'
import css from 'styled-jsx/css'

type Props = {
    pointer?: boolean
    pointed?: boolean
    orientation?: 'row' | 'column'
    color?: number[]
    name?: string
}


function NodeBox({ pointer, pointed, color, name }: Props) {
    return (
        <div>
            <ValueBox color={color} name={name} pointer={pointer} pointed={pointed} />
            <PointerBox color={color} pointed={pointed} />
            <style jsx>{nodeBoxStyles}</style>
        </div>

    )
}

export default NodeBox


const nodeBoxStyles = css`
  div {
    display: flex;
  }
  div > :global(.pointer-box)  {
    transform: translateX(-110px);
  }
`