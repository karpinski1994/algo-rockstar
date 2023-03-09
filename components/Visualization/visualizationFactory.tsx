import arrayVisualizationSteps from "@/data-structures/array/visualization";
import linkedListVisualizationSteps from "@/data-structures/linked-list/visualization";
import stackVisualizationSteps from "@/data-structures/stack/visualization";
import queueVisualizationSteps from"@/data-structures/queue/visualization";

const visualizationFactory = (codeStructure: string | string[] | undefined) => {
  switch (codeStructure) {
    case "linked-list":
      return linkedListVisualizationSteps;
    case "array":
      return arrayVisualizationSteps;
    case "stack":
      return stackVisualizationSteps;
    case "queue":
      return queueVisualizationSteps;
    default:
      return "Content for that section will be provided soon.";
  }
};
export default visualizationFactory;
