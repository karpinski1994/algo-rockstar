import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './Answer.module.css'

const Answer = ({label, name, type, id, correct, submitted}) => {
    console.log("🚀 ~ file: index.tsx:6 ~ Answer ~ correct", correct)
    
    return (
        <Form.Check
            className={`${styles.check} ms-0 ps-0 mb-2, ${submitted && correct ? styles.correct : ''} ${submitted && !correct ? styles.wrong : ''}`}
            label={label}
            name={name}
            type={type}
            id={label + id}
        />
    )
}

export default Answer
