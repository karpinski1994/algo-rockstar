import { IAnswer, IQuestion } from '@/data-structures/LinkedList/questions'
import { getAlphabetLetter } from '@/utils/strings/alphabet'
import React, { useState } from 'react'
import Answer from '../Answer'

const getLabel = (label: string, idx: number) => `${getAlphabetLetter(idx)}.  ${label}`

interface Props {
    question: string;
    answer: string;
    selectAnswer: (e: React.ChangeEvent) => void;
    answers: Array<IAnswer>;
    correctId: string;
    submitted: boolean;
}

const Question = ({question, answer, selectAnswer, answers, correctId, submitted } : Props) => {
    return (
        <div>
            <div className='d-flex'>
                <p className='fw-bold me-1'>Question: </p><p>{question}</p>
            </div>


            <div className="d-flex flex-column mb-4">
                {answers.map((el, idx) => (
                    <Answer correctId={correctId} question={question} answer={answer} onChange={selectAnswer} submitted={submitted}  key={`${el}${idx}`} {...el} label={getLabel(el.label, idx)} id={`${idx}`} />
                ))}
                {submitted && correctId === answer && 
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