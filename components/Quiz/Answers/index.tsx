import { getAlphabetLetter } from '@/utils/strings/alphabet'
import React from 'react'
import Answer from '../Answer'

const settings = [
    {
        label: 'O(n)',
        name: 'answer',
        type: 'radio',
    },
    {
        label: 'O(n log n)',
        name: 'answer',
        type: 'radio',
    },
    {
        label: 'O(m * n)',
        name: 'answer',
        type: 'radio',
    },
]

const getLabel = (label, idx) => `${getAlphabetLetter(idx)}.  ${label}`

const Answers = () => {
    return (
        <>
            {settings.map(
                (el, idx) => (
                    <Answer {...el} label={getLabel(el.label, idx)}  id={idx + 1} />
                )
            )}
        </>

    )
}

export default Answers