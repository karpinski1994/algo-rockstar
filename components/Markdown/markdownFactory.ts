import linkedListMarkdown from '../../data-structures/LinkedList/description';
import arrayMarkDown from '../../data-structures/array/description';
import bigODecription from '../../data-structures/big-o/description';

const markdownFactory = (route: string | string[] | undefined) => {
  switch (route) {
    case "linked-list":
      return linkedListMarkdown;
    case "array":
      return arrayMarkDown;
    case "big-o":
      return bigODecription;
    default:
      return 'Content for that section will be provided soon.';
  }
};
export default markdownFactory;