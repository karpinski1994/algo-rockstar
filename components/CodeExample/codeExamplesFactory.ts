import linkedListCodeExamples from '../../data-structures/linked-list/codeExamples';

const codeExampleFactory = (route: string | undefined | string[]) => {
  switch (route) {
    case "linked-list":
      return linkedListCodeExamples;
    case "array":
      return linkedListCodeExamples;
    default:
      return { exampleLangugage: 'Content for that section will be provided soon.' };
  }
};

export default codeExampleFactory