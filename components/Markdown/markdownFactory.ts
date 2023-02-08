import linkedListMarkdown from '../../data-structures/LinkedList/description';
import arrayMarkDown from '../../data-structures/Array/description';

const markdownFactory = (route: string | string[] | undefined) => {
  switch (route) {
    case "linked-list":
      return linkedListMarkdown;
    case "array":
      return arrayMarkDown;
    default:
      return 'Content for that section will be provided soon.';
  }
};
export default markdownFactory;