import { FormCheckType } from "react-bootstrap/esm/FormCheck";

export default [
  {
    question: 'What is the time complexity of sorting operation in array?',
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
    submitted: false,
    answer: ''
  },
  {
    question: 'Can you access values by using index in the array?',
    answers: [{
      label: 'Yes',
      type: 'radio' as FormCheckType,
    },
    {
      label: 'No',
      type: 'radio' as FormCheckType,
    }],
    correctId: '0',
    submitted: false,
    answer: ''
  },
]