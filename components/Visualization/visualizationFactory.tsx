import arrayVisualizationSteps from "@/data-structures/Array/visualization";
import linkedListVisualizationSteps from "@/data-structures/LinkedList/visualization";

export default (codeStructure: string | string[] | undefined) => {
    switch (codeStructure) {
        case "linked-list":
            return linkedListVisualizationSteps
        case "array":
            return arrayVisualizationSteps
        default:
            return 'Content for that section will be provided soon.';
    }
};