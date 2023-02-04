import linkedListMarkDown from '../LinkedList/description';

export default (route: string) => {
    switch (route) {
      case "linked-list":
        return linkedListMarkDown;
      default:
        return 'Content for that section will be provided soon.';
    }
  };