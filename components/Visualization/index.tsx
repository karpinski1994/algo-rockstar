import LinkedListVisualization from "../../data-structures/LinkedList/visualization";
import ArrayVisualization from  "../../data-structures/Array/visualization";
// TODO: COmponent has to be common we just need to pass markdown
export default ({ route }) => {
    switch (route) {
        case "linked-list":
            return <LinkedListVisualization />
        case "array":
            return <ArrayVisualization />
        default:
            return <div>Content for that section will be provided soon.</div>;
    }
};