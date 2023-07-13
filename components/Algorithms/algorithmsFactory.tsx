import {algorithms as graphAlgorithms} from "@/data-structures/graph/algorithms";

// TODO: move those factories to other files / rewrite it to routing
// TOOD: components are very often not components but some kind of pages / page like components
const algorithmsFactory = (codeStructure: string | string[] | undefined) => {
  switch (codeStructure) {
    case "graph":
      return graphAlgorithms;
    default:
      return "Content for that section will be provided soon.";
  }
};
export default algorithmsFactory;
