import { getAlphabetLetter } from '@/utils/strings/alphabet'
import React, { useState } from 'react'
import Answer from '../Answer'

const getLabel = (label, idx) => `${getAlphabetLetter(idx)}.  ${label}`


const Question = ({question, answer, selectAnswer, answers, correctId, submitted }) => {
    return (
        <div>
            <div className='d-flex'>
                <p className='fw-bold me-1'>Question: </p><p>{question}</p>
            </div>


            <div className="d-flex flex-column mb-4">
                {answers.map((el, idx) => (
                    <Answer correctId={correctId} question={question} answer={answer} onChange={selectAnswer} submitted={submitted} answer={answer} key={`${el}${idx}`} {...el} label={getLabel(el.label, idx)} id={`${idx}`} />
                ))}
                {submitted && `${correctId}` === answer && 
                <div className='fw-bold text-success'>
                    Answer is correct!
                </div>}
                {submitted && `${correctId}` !== answer && 
                <div className='fw-bold text-danger'>
                    Answer is not correct!
                </div>}
            </div>

        </div>

    )
}

export default Question