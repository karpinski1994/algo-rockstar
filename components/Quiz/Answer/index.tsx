import React, { ChangeEvent, SyntheticEvent } from 'react'
import { Form, FormCheck } from 'react-bootstrap'
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';
import styles from './Answer.module.css'

interface Props {
    question: string;
    answer: string;
    label: string;
    type: FormCheckType;
    id: string;
    submitted: boolean;
    correctId: string;
    onChange: (e: ChangeEvent<Element>) => void;
}

const Answer = ({ question, answer, label, type, id, submitted, correctId, onChange }: Props) => {
    
    return (
        <>
            <FormCheck.Label htmlFor={question + id} 
           />
            <Form.Check
                className={`${styles.check} ${submitted && correctId === id ? styles.correct: ''} ${submitted && correctId !== id ? styles.wrong: ''}`}
                label={label}
                name={question}
                type={type}
                checked={answer === id}
                id={question + id}
                onChange={onChange}
                disabled={submitted}
            />
        </>

    )
}

export default Answer
