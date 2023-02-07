import linkedQuestions from '../../data-structures/LinkedList/questions';
import arrayQuestions from '../../data-structures/Array/questions';

export default (route: string) => {
    switch (route) {
      case "linked-list":
        return linkedQuestions;
      case "array":
        return arrayQuestions;
      default:
        return 'Content for that section will be provided soon.';
    }
  };