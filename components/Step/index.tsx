import ArrayVisualization from "@/data-structures/Array/visualization";
import LinkedlistVisualization from "@/data-structures/LinkedList/visualization";


{/*TODO: add more conditional statements here*/}
export default function Step({route,stepIndex}){
    switch(route.route){
        case "array":
            return <ArrayVisualization stepIndex={stepIndex}/>;
        case "linked list":
            return <LinkedlistVisualization stepIndex={stepIndex}/>;
        default:
            return null;
    }
}