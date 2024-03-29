import CodeExample from "@/components/CodeExample";
import codeExampleFactory from "@/components/CodeExample/codeExamplesFactory";
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
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
      return buildUrl(url) + "/code-examples";
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
  const codeExample = codeExampleFactory(context.params.dataStructure);
  return {
    props: {
      dataStructure,
      codeExample,
    },
  };
}

const DataStructuresCodeExamplesPage = ({ codeExample }: { codeExample: any }) => {
  return (
    <>
      <CodeExample codeExamples={codeExample} />
    </>
  );
};

DataStructuresCodeExamplesPage.getLayout = DataStructurePageLayout;

export default DataStructuresCodeExamplesPage;
