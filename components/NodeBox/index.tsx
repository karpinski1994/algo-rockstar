import React from 'react'
import PointerBox from '../PointerBox'
import ValueBox from '../ValueBox'
import css from 'styled-jsx/css'

type Props = {
  pointer?: boolean
  pointed?: boolean
  orientation?: 'row' | 'column'
  arrowOrientation?: 'string'
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
  label = '',
  arrowOrientation,
}: Props) {
  return (
    <div>
      <ValueBox color={color} name={name} label={label} />
      {pointer && <PointerBox color={color} pointed={pointed} arrow={arrow} arrowOrientation={arrowOrientation} />}
      <style jsx>{nodeBoxStyles}</style>
    </div>

  )
}

export default NodeBox


const nodeBoxStyles = css`
  div {
    display: flex;
    margin-right: -30%;
  }
`