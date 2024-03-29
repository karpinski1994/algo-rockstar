import Quiz from "@/components/Quiz";
import questionsFactory from "@/components/Quiz/questionsFactory";
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { DataStructurePageLayout } from ".";

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
      return buildUrl(url) + "/quiz";
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

const DataStructuresQuizPage = ({ questions, dataStructure }: any) => {
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(
        dataStructure
      )} - code examples`}</h3>
      <Quiz questionsFromFactory={questions} />
    </>
  );
};

DataStructuresQuizPage.getLayout = DataStructurePageLayout;

export default DataStructuresQuizPage;
