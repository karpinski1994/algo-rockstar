import { useRouter } from "next/router";
import React from "react";
import { Nav } from "react-bootstrap";




const addActiveClass = (currentUrl: string, linkUrl: string) =>{
console.log('currentUrl: ', currentUrl)
console.log('linkUrl: ', linkUrl)
  return currentUrl.includes(linkUrl) ? "active" : "";
}

function TabsNavbar({ queryElement }: any) {
  console.log("🚀 ~ file: index.tsx:9 ~ TabsNavbar ~ queryElement:", queryElement)
  const router = useRouter();
  const { asPath } = router;
  return (
    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link
          // TODO: Maybe move it to utils, and extract configuration of nav to some config array
          className={addActiveClass(asPath, `/data-structures/${queryElement}`)}
          href={`/data-structures/${queryElement}/`}
        >
          Description
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={addActiveClass(
            asPath,
            `/data-structures/${queryElement}/visualization`
          )}
          href={`/data-structures/${queryElement}/visualization`}
        >
          Vizualization
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={addActiveClass(
            asPath,
            `/data-structures/${queryElement}/code-examples`
          )}
          href={`/data-structures/${queryElement}/code-examples`}
        >
          Code Examples
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={addActiveClass(
            asPath,
            `/data-structures/${queryElement}/quiz`
          )}
          href={`/data-structures/${queryElement}/quiz`}
        >
          Quiz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={addActiveClass(
            asPath,
            `/data-structures/${queryElement}/puzzles`
          )}
          href={`/data-structures/${queryElement}/puzzles`}
        >
          Puzzles
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsNavbar;
