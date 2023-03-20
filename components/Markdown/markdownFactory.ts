import linkedListDescription from "../../data-structures/linked-list/description";
import arrayDescription from "../../data-structures/indexed-list/description";
import bigODescription from "../../data-structures/big-o/description";
import stackDescription from "../../data-structures/stack/description";
import queueDescriptions from "../../data-structures/queue/description";
import hashtableDescriptions from "../../data-structures/hash-table/description";
import treeDescriptions from "../../data-structures/tree/description";
import heapDescriptions from "../../data-structures/heap/description";
import graphDescriptions from "../../data-structures/graph/description";

// TODO: directories structure may be a little bit confusing we have 'data-structures' twice
// we have to think about some declarations folder or settings or whatever
// (TO BE CHECKED WHAT ARE GOOD PRACTICES)
const markdownFactory = (route: string | string[] | undefined) => {
  switch (route) {
    case "linked-list":
      return linkedListDescription;
    case "array":
      return arrayDescription;
    case "big-o":
      return bigODescription;
    case "stack":
      return stackDescription;
    case "queue":
      return queueDescriptions;
    case "hash-table":
      return hashtableDescriptions;
    case "tree":
      return treeDescriptions;
    case "heap":
      return heapDescriptions;
    case "graph":
      return graphDescriptions;
    default:
      return "Content for that section will be provided soon.";
  }
};

export default markdownFactory;
