import { puzzles as graphPuzzles } from "@/data-structures/graph/puzzles";

const puzzlesFactory = (codeStructure: string | string[] | undefined): any => {
    switch (codeStructure) {
        case "graph":
            return { graphPuzzles, numberOfPuzzles: graphPuzzles.length };
        default:
            return "Content for that section will be provided soon.";
    }
};
export default puzzlesFactory;
