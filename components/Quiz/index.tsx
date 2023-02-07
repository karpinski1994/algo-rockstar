import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';

import Question from './Question';
import questionsFactory from './questionsFactory';

type Props = {}

// TODO: Change everywhere where i have factories (Visualization factory to factories / switch)
function Quiz({codeStructure}: Props) {
  const questionsFromFactory = questionsFactory(codeStructure);
    // console.log("🚀 ~ file: index.tsx:10 ~ CodeExample ~ questions", questions)
    // TODO: This is dummy sync function for testing purposes we have to change it the way example will be rendered with mounting of component

    useEffect(() => {
        if(questionsFromFactory) {
            setQuestions(questionsFromFactory)
        }
    }, [questionsFromFactory])

    const [questions, setQuestions] = useState(null);
  
  
  return (
    <Form>
      {Array.isArray(questions) && questions.map((el, idx) => (
        <Question key={el.question + idx} {...el}/>
      ))}
    </Form>
  )
}

export default Quiz