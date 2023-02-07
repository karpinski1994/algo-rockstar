import { getAlphabetLetter } from '@/utils/strings/alphabet'
import React from 'react'
import Answer from '../Answer'

const getLabel = (label, idx) => `${getAlphabetLetter(idx)}.  ${label}`

const Question = ({ question, answers, correctId, submitted }) => {
    return (
        <div>
            <div className='d-flex'>
                <p className='fw-bold me-1'>Question: </p><p>{question}</p>
            </div>


            <div className="d-flex flex-column mb-4">
                {answers.map((el, idx) => (
                    <Answer submitted={submitted} correct={idx === correctId} name={question} key={`${el}${idx}`} {...el} label={getLabel(el.label, idx)} id={idx + 1} />
                ))}
            </div>

        </div>

    )
}

export default Question