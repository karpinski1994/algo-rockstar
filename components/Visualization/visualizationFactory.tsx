import arrayVisualizationSteps from "@/data-structures/array/visualization";
import linkedListVisualizationSteps from "@/data-structures/LinkedList/visualization";

const visualizationFactory = (codeStructure: string | string[] | undefined) => {
    switch (codeStructure) {
        case "linked-list":
            return linkedListVisualizationSteps
        case "array":
            return arrayVisualizationSteps
        default:
            return 'Content for that section will be provided soon.';
    }
};
export default visualizationFactory