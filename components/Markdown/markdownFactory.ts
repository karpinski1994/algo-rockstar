import linkedListMarkdown from '../../data-structures/LinkedList/description';
import arrayMarkDown from '../../data-structures/Array/description';

export default (route: string) => {
    switch (route) {
      case "linked-list":
        return linkedListMarkdown;
      case "array":
        return arrayMarkDown;
      default:
        return 'Content for that section will be provided soon.';
    }
  };