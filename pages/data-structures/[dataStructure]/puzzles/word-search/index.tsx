import React from "react";
import highlightWord from "./highlightWord";
import NodeBox from "@/components/NodeBox";
const board = [
  ["P", "A", "T", "E"],
  ["S", "F", "R", "S"],
  ["A", "M", "Y", "E"],
  ["S", "O", "K", "I"],
];

export default function WordSearchPage() {
  // const highlightedFields = highlightWord(board, "A");
  const [fields, setFields] = React.useState<Array<any>>([]);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setFields(highlightWord(board, text));
    console.log("fields: ", fields);
  }, [text]);

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {fields.map((r: Array<any>, i: number) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
          key={new Date().getTime() + i}
        >
          {r.map((l: {letter: string, isUsed: boolean}, i: number) => (
            <>
              <NodeBox
                width="40%"
                arrow={false}
                name={l.letter}
                color={l.isUsed ? [100, 200, 10, 1] : [102, 144, 250, 0.9]}
                pointer={false}
              />
            </>

            // <div
            //   style={{
            //     display: "inline-flex",
            //   }}
            //   key={new Date().getTime() + i}
            // >

            // </div>
          ))}
        </div>
      ))}
    </div>
  );
}
