import React from "react";
import highlightWord from "./highlightWord";
const board = [
  ["P", "A", "T", "E"],
  ["S", "F", "R", "S"],
  ["A", "K", "Y", "E"]
];

export default function WordSearchPage() {
  // const highlightedFields = highlightWord(board, "A");
  const [fields, setFields] = React.useState([]);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    setFields(highlightWord(board, text));
    console.log("fields: ", fields);
  }, [text]);

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {fields.map((r, i) => (
        <div style={{}} key={new Date().getTime() + i}>
          {r.map((l, i) => (
            <div
              style={{
                display: "inline-flex",
                marginRight: 5,
                backgroundColor: l.isUsed ? "lightgreen" : "lightblue"
              }}
              key={new Date().getTime() + i}
            >
              {String(l.letter)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
