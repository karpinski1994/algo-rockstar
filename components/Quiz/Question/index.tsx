import React from 'react'
import { Form } from 'react-bootstrap'
import Answer from '../Answer'
import Answers from '../Answers'

const Question = () => {
    return (
        <div>
            <div className='d-flex'>
            <p className='fw-bold me-1'>Question: </p><p>What is the time complexity of sorting operation in linkedlist?</p>
            </div>
           

            <Form>
                {['radio'].map((type) => (
                    <div key={`${type}`} className="d-flex flex-column mb-3">
                        <Answers />
                    </div>
                ))}
            </Form>
        </div>

    )
}

export default Question