import Quiz from "@/components/Quiz";
import questionsFactory from "@/components/Quiz/questionsFactory";
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { DataStructurePageLayout } from ".";
import { Nav } from "react-bootstrap";
import puzzlesFactory from "@/components/Puzzles/puzzlesFactory";
import algorithmsFactory from "@/components/Algorithms/algorithmsFactory";

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
      return buildUrl(url) + "/algorithms";
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
  console.log("🚀 ~ file: algorithms.tsx:45 ~ DataStructuresPuzzlesPage ~ dataStructure:", dataStructure)
  const algorithms : any = algorithmsFactory(dataStructure);
  console.log("🚀 ~ file: algorithms.tsx:46 ~ DataStructuresPuzzlesPage ~ algorithms:", algorithms)
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(
        dataStructure
      )} - Algorithms`}</h3>
      {Array.isArray(algorithms) &&
        algorithms?.map((l: any) => (
          <Nav.Item key={Date.now()}>
            <Nav.Link
              // TODO: Maybe move it to utils, and extract configuration of nav to some config array
              // className={addActiveClass(asPath, `/data-structures/${queryElement}`)}
              href={`/data-structures/${dataStructure}/algorithms/${l.href}`}
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
