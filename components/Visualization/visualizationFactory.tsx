import arrayVisualizationSteps from "@/data-structures/indexed-list/visualization";
import linkedListVisualizationSteps from "@/data-structures/linked-list/visualization";
import stackVisualizationSteps from "@/data-structures/stack/visualization";
import queueVisualizationSteps from "@/data-structures/queue/visualization";
import treeVisualizationSteps from "@/data-structures/tree/visualization";

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
    case "tree":
      return treeVisualizationSteps;
    default:
      return "Content for that section will be provided soon.";
  }
};
export default visualizationFactory;
