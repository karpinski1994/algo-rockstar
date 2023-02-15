import React from 'react'

type Props = {
    color?: number[];
    pointer?: boolean
    pointed?: boolean
    name?: string
    label?: string
}

function ValueBox({ color=[122,122,122], name, label }: Props) {
  const colorSides = `RGBA(${color[0]-100},${color[1]-100},${color[2]-100},${color[3]})`;
  const colorTop = `RGBA(${color[0]},${color[1]},${color[2]},${color[3]})`;
    return (
      <div className='value-box d-flex justify-content-center'>
        {label&&<h3 className="">{label}</h3>}
        <svg width="100%" style={{transform: 'rotate(-30deg) translate(24%, -22%)'}} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex={0}>
          <rect className="buttonSides" x="5.04999" y="51" width="90.62" height="8" fill={colorSides} />
          <rect className="buttonSides" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" fill={colorSides}/>
          <g clipPath="url(#clip0_106_11)">
            <rect className="buttonTop" width="57" height="57" rx="8" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill={colorTop} />
          </g>
          <text id='text' x="57" y="57" fontSize="80%" fill="#fff"
            style={{transform: "rotate(30deg) translate(-10%, -35%)"}}>{name}</text>
        </svg>
       
      </div>
      
)}

export default ValueBox