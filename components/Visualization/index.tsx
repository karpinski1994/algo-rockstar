import React from 'react'
import StepsSlider from '../StepsSlider';

export const Visualization = ({visualization}) => {
    return (
        <>
            
            {visualization && <StepsSlider steps={visualization} />}
        </>
    )
}
