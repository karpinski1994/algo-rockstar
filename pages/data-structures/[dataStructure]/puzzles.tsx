import Quiz from "@/components/Quiz";
import questionsFactory from "@/components/Quiz/questionsFactory";
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { DataStructurePageLayout } from ".";
import { Nav } from "react-bootstrap";
import puzzlesFactory from "@/components/Puzzles/puzzlesFactory";

interface Props {
  params: {
    dataStructure: "array";
  };
  locales?: undefined;
  locale?: undefined;
  defaultLocale?: undefined;
}

export const getStaticPaths = () => {
  const paths = stackNavSettings
    .filter(({ url }) => url.length > 1)
    .map(({ url }) => {
      return buildUrl(url) + "/puzzles";
    });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: Props) {
  const {
    params: { dataStructure },
  } = context;
  const questions = questionsFactory(context.params.dataStructure);
  return {
    props: {
      dataStructure,
      questions,
    },
  };
}

const DataStructuresPuzzlesPage = ({ questions, dataStructure }: any) => {
  const { graphPuzzles: puzzles }: any = puzzlesFactory(dataStructure);
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(
        dataStructure
      )} - Puzzles`}</h3>
      {Array.isArray(puzzles) &&
        puzzles?.map((l: any) => (
          <Nav.Item key={Date.now()}>
            <Nav.Link
              // TODO: Maybe move it to utils, and extract configuration of nav to some config array
              // className={addActiveClass(asPath, `/data-structures/${queryElement}`)}
              href={`/data-structures/${dataStructure}/puzzles/${l.href}`}
            >
              {l.title}
            </Nav.Link>
          </Nav.Item>
        ))}

      {/* <Quiz questionsFromFactory={questions} /> */}
    </>
  );
};

DataStructuresPuzzlesPage.getLayout = DataStructurePageLayout;

export default DataStructuresPuzzlesPage;
