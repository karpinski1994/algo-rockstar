import linkedListCodeExamples from '../../data-structures/linked-list/codeExamples';
import graphCodeExamples from '../../data-structures/graph/codeExamples';

const codeExampleFactory = (route: string | undefined | string[]) => {
  switch (route) {
    case "linked-list":
      return linkedListCodeExamples;
    case "array":
      return linkedListCodeExamples;
    case "graph":
        return graphCodeExamples;
    default:
      return { exampleLangugage: 'Content for that section will be provided soon.' };
  }
};

export default codeExampleFactory