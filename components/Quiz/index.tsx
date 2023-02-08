import { IQuestion } from '@/data-structures/LinkedList/questions';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import Question from './Question';
import questionsFactory from './questionsFactory';

type Props = {
  codeStructure: string | string[] | undefined;
}


// TODO: Change everywhere where i have factories (Visualization factory to factories / switch)
function Quiz({ codeStructure }: Props) {
  const questionsFromFactory: string | IQuestion[] = questionsFactory(codeStructure);
  // console.log("🚀 ~ file: index.tsx:10 ~ CodeExample ~ questions", questions)
  // TODO: This is dummy sync function for testing purposes we have to change it the way example will be rendered with mounting of component

  useEffect(() => {
    if (questionsFromFactory) {
      setQuestions(questionsFromFactory)
    }
  }, [questionsFromFactory])

  const [questions, setQuestions] = useState<IQuestion[] | string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOnSelectAnswer = (e: React.ChangeEvent) => {
    if (Array.isArray(questions)) {
      const data: Array<IQuestion> = [...Array.from(questions)];
      let foundQuestion = data.find(q => q.question.includes(e.currentTarget.id.slice(0, -1)));
      const foundAnswerId = e.currentTarget.id.slice(-1);
      foundQuestion && (foundQuestion.answer = `${foundAnswerId}`);
      setQuestions(data);
    }
  }

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (Array.isArray(questions)) {
      const data = [...questions];
      const newData = data.map(el => ({ ...el, submitted: true }));
      setQuestions(newData);
      setIsSubmitted(true);
    }
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      {Array.isArray(questions) && questions.map((el: IQuestion, idx) => {

        return (
          <Question selectAnswer={handleOnSelectAnswer} key={el.question + idx} {...el} />
        )
      })}
      <Button disabled={isSubmitted} type="submit">Check answers</Button>
    </Form>
  )
}

export default Quiz