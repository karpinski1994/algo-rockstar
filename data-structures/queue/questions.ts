import { FormCheckType } from "react-bootstrap/esm/FormCheck";

export interface IAnswer {
  label: string;
  type: FormCheckType;
}

export interface IQuestion {
  question: string;
  answers: Array<IAnswer>;
  correctId: string;
  answer: string;
  submitted: boolean;
}

const questions: Array<IQuestion> = [
  {
    question: 'What is the time complexity of sorting operation in linkedlist?',
    answers: [{
      label: 'O(n)',
      type: 'radio' as FormCheckType,
    },
    {
      label: 'O(n log n)',
      type: 'radio' as FormCheckType,
    },
    {
      label: 'O(m * n)',
      type: 'radio' as FormCheckType,
    },],
    correctId: '1',
    answer: '',
    submitted: false,
  },
  {
    question: 'Can you access values by using index in the linked list?',
    answers: [{
      label: 'Yes',
      type: 'radio' as FormCheckType,
    },
    {
      label: 'No',
      type: 'radio' as FormCheckType,
    }],
    correctId: '1',
    answer: '',
    submitted: false,
  },
]

export default questions;