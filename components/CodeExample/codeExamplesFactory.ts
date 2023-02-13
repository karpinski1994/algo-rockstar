import linkedListCodeExamples from '../../data-structures/linked-list/codeExamples';
import arrayCodeExamples from '../../data-structures/array/codeExamples';

const codeExampleFactory = (route: string | undefined | string[]) => {
  switch (route) {
    case "linked-list":
      return linkedListCodeExamples;
    case "array":
      return arrayCodeExamples;
    default:
      return { exampleLangugage: 'Content for that section will be provided soon.' };
  }
};

export default codeExampleFactory