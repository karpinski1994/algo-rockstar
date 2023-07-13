import React from "react";
import NodeBox from "@/components/NodeBox";
import { DataStructurePageLayout } from "../..";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";

function WordSearchPage() {
  // const highlightedFields = highlightWord(board, "A");
  const [fields, setFields] = React.useState<any>([]);
  const [text, setText] = React.useState("");

  const router = useRouter();


  return (
    <div>
      <Nav.Link onClick={() => router.back()}>{"< back to the list"}</Nav.Link>
      <h1>Graph - BFS</h1>
      <h4>Description</h4>
      <p>
        Given an m x n grid of characters board and a string word, return true
        if word exists in the grid. The word can be constructed from letters of
        sequentially adjacent cells, where adjacent cells are horizontally or
        vertically neighboring. The same letter cell may not be used more than
        once.
      </p>
      
    </div>
  );
}

WordSearchPage.getLayout = DataStructurePageLayout;

export default WordSearchPage;
