import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './Answer.module.css'

const Answer = ({label, name, type, id}) => {
    return (
        <Form.Check
            className={`${styles.check} ms-0 ps-0 mb-2`}
            label={label}
            name={name}
            type={type}
            id={id}
        />
    )
}

export default Answer
