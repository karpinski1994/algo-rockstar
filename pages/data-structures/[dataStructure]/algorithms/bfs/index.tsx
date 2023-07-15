import React, { useEffect } from "react";
import NodeBox from "@/components/NodeBox";
import { DataStructurePageLayout } from "../..";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import GraphVisualization from "@/pages/graph-visualization";

const data = {
  nodes: [
    {
      id: 1,
      name: "G",
      selected: true,
    },
    {
      id: 2,
      name: "B",
      selected: true,
    },
    {
      id: 3,
      name: "C",
    },
    {
      id: 4,
      name: "D",
    },
    {
      id: 5,
      name: "E",
    },
    {
      id: 6,
      name: "F",
    },
    {
      id: 7,
      name: "A",
      selected: true,
    },

  ],
  links: [
    {
      source: 1,
      target: 2,
    },
    {
      source: 2,
      target: 3,
    },
    {
      source: 1,
      target: 3,
    },
    {
      source: 1,
      target: 4,
    },
    {
      source: 2,
      target: 5,
    },
    {
      source: 3,
      target: 6,
    },
    {
      source: 1,
      target: 7,
    },
    {
      source: 2,
      target: 7,
    },
   
  ],
};

function WordSearchPage() {
  // const highlightedFields = highlightWord(board, "A");
  const [fields, setFields] = React.useState<any>(data);
  const [text, setText] = React.useState("");

  useEffect(() => {
    console.log('newFields: ', fields)
  }, [fields])

  const onClick = ({id}) => {
    console.log("🚀 ~ file: index.tsx:86 ~ onClick ~ node:", id)
    console.log('fields: ', fields)
    console.log('found: ', fields.nodes.find(n => n.id === id))

    setFields((prevFields) => ({
      ...prevFields,
      nodes: prevFields.nodes.map((node) =>
        node.id === id ? { ...node, selected: true } : node
      ),
    }));
    
  }

  const router = useRouter();

  return (
    <div>
      <Nav.Link onClick={() => router.back()}>{"< back to the list"}</Nav.Link>
      <h1>Graph - BFS</h1>
      <h4>Description</h4>

      <GraphVisualization data={fields} onClick={onClick}/>
    </div>
  );
}

WordSearchPage.getLayout = DataStructurePageLayout;

export default WordSearchPage;
