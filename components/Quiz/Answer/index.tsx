import React from 'react'
import { Form, FormCheck } from 'react-bootstrap'
import styles from './Answer.module.css'

const Answer = ({ question, answer, label, type, id, submitted, correctId, onChange }) => {
    
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
