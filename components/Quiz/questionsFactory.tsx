import linkedQuestions from '../../data-structures/linked-list/questions';
import arrayQuestions from '../../data-structures/indexed-list/questions';

const questionsFactory = (route: string | string[] | undefined) => {
  switch (route) {
    case "linked-list":
      return linkedQuestions;
    case "array":
      return arrayQuestions;
    default:
      return 'Content for that section will be provided soon.';
  }
};

export default questionsFactory