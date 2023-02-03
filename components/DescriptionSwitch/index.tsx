import ArrayDescription from "../Array/description";
import LinkedListDescription from "../LinkedList/description";
// TODO: COmponent has to be common we just need to pass markdown
export default ({ route }) => {
    switch (route) {
      case "linked-list":
       return <LinkedListDescription />
      case "array":
       return <ArrayDescription />
      default:
        return <div>Content for that section will be provided soon.</div>;
    }
  };