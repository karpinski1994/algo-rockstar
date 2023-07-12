import React from "react";
import highlightWord from "./highlightWord";
import NodeBox from "@/components/NodeBox";
import { DataStructurePageLayout } from "../..";
import { useRouter } from "next/router";
import Link from "next/link";
import { Nav } from "react-bootstrap";
const board = [
  ["P", "A", "T", "E"],
  ["S", "F", "R", "S"],
  ["A", "M", "Y", "E"],
  ["S", "O", "K", "I"],
];

function WordSearchPage() {
  // const highlightedFields = highlightWord(board, "A");
  const [fields, setFields] = React.useState<any>([]);
  const [text, setText] = React.useState("");

  const router = useRouter();
  React.useEffect(() => {
    setFields(highlightWord(board, text));
  }, [text]);

  return (
    <div>
      <Nav.Link onClick={() => router.back()}>{"< back to the list"}</Nav.Link>
      <h1>Leet code - Word Search</h1>
      <h4>Description</h4>
      <p>
        Given an m x n grid of characters board and a string word, return true
        if word exists in the grid. The word can be constructed from letters of
        sequentially adjacent cells, where adjacent cells are horizontally or
        vertically neighboring. The same letter cell may not be used more than
        once.
      </p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {fields.map((r: Array<any>, i: number) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
          key={new Date().getTime() + i}
        >
          {r.map((l: { letter: string; isUsed: boolean }, i: number) => (
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

WordSearchPage.getLayout = DataStructurePageLayout;

export default WordSearchPage;
