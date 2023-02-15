import React from 'react'
import PointerBox from '../PointerBox/PointerBox'
import ValueBox from '../ValueBox/ValueBox'
import css from 'styled-jsx/css'
// TODO: Make files structure consistent (here ..Arrow/index.tsx)
import Arrow from '../Arrow/Arrow'

type Props = {
  pointer?: boolean
  pointed?: boolean
  orientation?: 'row' | 'column'
  color?: number[]
  name?: string
  arrow?: boolean
  label?: string
}


function NodeBox({
  pointer = true,
  pointed,
  color,
  name,
  arrow,
  label = ''
}: Props) {
  return (
    <div>
      <ValueBox color={color} name={name} label={label} />
      {pointer && <PointerBox color={color} pointed={pointed} arrow={arrow} />}
      
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
    transform: translateX(42%);
    margin-right:5vw;
  }
`