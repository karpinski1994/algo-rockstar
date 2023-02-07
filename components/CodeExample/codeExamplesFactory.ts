import linkedListCodeExamples from '../../data-structures/LinkedList/codeExamples';
import arrayCodeExamples from '../../data-structures/Array/codeExamples';

export default (route: string) => {
    switch (route) {
      case "linked-list":
        return linkedListCodeExamples;
      case "array":
          return arrayCodeExamples;
      default:
        return 'Content for that section will be provided soon.';
    }
  };