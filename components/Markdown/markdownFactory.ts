import linkedListMarkdown from "../../data-structures/linked-list/description";
import arrayMarkDown from "../../data-structures/array/description";
import bigODecription from "../../data-structures/big-o/description";
import stackDecription from "../../data-structures/stack/description";
// TODO: directories structure may be a little bit confusing we have 'data-structures' twice
// we have to think about some declarations folder or settings or whatever
// (TO BE CHECKED WHAT ARE GOOD PRACTICES)
const markdownFactory = (route: string | string[] | undefined) => {
  switch (route) {
    case "linked-list":
      return linkedListMarkdown;
    case "array":
      return arrayMarkDown;
    case "big-o":
      return bigODecription;
    case "stack":
      return stackDecription;
    default:
      return "Content for that section will be provided soon.";
  }
};

export default markdownFactory;
