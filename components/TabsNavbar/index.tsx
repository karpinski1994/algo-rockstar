import { useRouter } from "next/router";
import React from "react";
import { Nav } from "react-bootstrap";
import puzzlesFactory from "../Puzzles/puzzlesFactory";

const addActiveClass = (currentUrl: string, linkUrl: string) => {
  return currentUrl.includes(linkUrl) ? "active" : "";
};

function TabsNavbar({ queryElement }: any) {
  const router = useRouter();
  const { asPath } = router;
  const { numberOfPuzzles } = puzzlesFactory(queryElement);
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
              `/data-structures/${queryElement}/algorithms`
            )}
            href={`/data-structures/${queryElement}/algorithms`}
          >
            Algorithms
          </Nav.Link>
        </Nav.Item>
      {/* TODO: numberOf implement to other cases as well*/}
      {numberOfPuzzles && (
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
      )}
    </Nav>
  );
}

export default TabsNavbar;
