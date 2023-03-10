import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { Visualization } from "@/components/Visualization";
import visualizationFactory from "@/components/Visualization/visualizationFactory";
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
      return buildUrl(url) + "/visualization";
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
  const visualization = visualizationFactory(context.params.dataStructure);
  return {
    props: {
      dataStructure,
      visualization,
    },
  };
}

const DataStructuresVisualizationPage = ({ visualization, dataStructure }) => {
  return (
    <>
      {/* TODO: Extract to above component to not depend on dataStructure here */}
      <h3 className="text-capitalize mt-4">{`${removeHyphens(
        dataStructure
      )} - visualization`}</h3>
      <Visualization visualization={visualization} />
    </>
  );
};

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;
