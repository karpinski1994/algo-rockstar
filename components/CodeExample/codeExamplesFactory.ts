import linkedListCodeExamples from '../../data-structures/LinkedList/codeExamples';
console.log("🚀 ~ file: codeExamplesFactory.ts:2 ~ linkedListCodeExamples", linkedListCodeExamples)
import arrayCodeExamples from '../../data-structures/Array/codeExamples';
console.log("🚀 ~ file: codeExamplesFactory.ts:3 ~ arrayCodeExamples", arrayCodeExamples)

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