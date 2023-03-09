import arrayVisualizationSteps from "@/data-structures/array/visualization";
import linkedListVisualizationSteps from "@/data-structures/linked-list/visualization";
import stackVisualizationSteps from "@/data-structures/stack/visualization";

const visualizationFactory = (codeStructure: string | string[] | undefined) => {
  switch (codeStructure) {
    case "linked-list":
      return linkedListVisualizationSteps;
    case "array":
      return arrayVisualizationSteps;
    case "stack":
      return stackVisualizationSteps;
    default:
      return "Content for that section will be provided soon.";
  }
};
export default visualizationFactory;
