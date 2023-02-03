import LinkedListVizualization from "../LinkedList/vizualization";
import ArrayVizualization from  "../Array/vizualization";
// TODO: COmponent has to be common we just need to pass markdown
export default ({ route }) => {
    switch (route) {
        case "linked-list":
            return <LinkedListVizualization />
        case "array":
            return <ArrayVizualization />
        default:
            return <div>Content for that section will be provided soon.</div>;
    }
};