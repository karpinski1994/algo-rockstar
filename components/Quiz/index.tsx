import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

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
    const [isSubmitted, setIsSubmitted] = useState(null);

    const handleOnSelectAnswer = (e) => {
      const data = [...questions];
      let foundQuestion = data.find(q => q.question.includes(e.currentTarget.id.slice(0,-1)));
      const foundAnswerId = e.currentTarget.id.slice(-1);
      foundQuestion.answer = `${foundAnswerId}`;
      setQuestions(data);
    }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = [...questions];
    const newData = data.map(el => ({...el, submitted: true}));
    console.log("🚀 ~ file: index.tsx:36 ~ handleOnSubmit ~ newData", newData)
    setQuestions(newData);
    setIsSubmitted(true);
  }
  
  return (
    <Form onSubmit={handleOnSubmit}>
      {Array.isArray(questions) && questions.map((el, idx) => {
        
        return (
        <Question correctId={el.correctId} selectAnswer={handleOnSelectAnswer} key={el.question + idx} {...el}/>
      )})}
      <Button disabled={isSubmitted} type="submit">Check answers</Button>
    </Form>
  )
}

export default Quiz