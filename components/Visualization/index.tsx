import { removeHyphens } from '@/utils/strings/removeHyphens';
import { useRouter } from 'next/router';
import React from 'react'
import StepsSlider from '../StepsSlider';
import visualizationFactory from './visualizationFactory';

export const Visualization = () => {
    const router = useRouter();
    const { dataStructure } = router.query;
    const visualizationSteps = visualizationFactory(dataStructure)
    return (
        <>
            <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - visualization`}</h3>
            {visualizationSteps && <StepsSlider steps={visualizationSteps} />}
        </>
    )
}
