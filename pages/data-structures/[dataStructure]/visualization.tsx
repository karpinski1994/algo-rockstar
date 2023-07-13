import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { Visualization } from "@/components/Visualization";
import visualizationFactory from "@/components/Visualization/visualizationFactory";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { DataStructurePageLayout } from ".";
import TreeVizualization from "@/pages/tree-vizualization";
import { useRouter } from "next/router";
import GraphVizualization from "@/pages/graph-visualization";



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

export async function getStaticProps(context: any) {
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

const DataStructuresVisualizationPage = ({ visualization, dataStructure }: { visualization: any, dataStructure: any }) => {
  console.log("visualization: ", visualization)
  const router = useRouter();
  let visu;
  if (dataStructure === 'graph') {
    visu =  <GraphVizualization />;
  } else {
    visu = <Visualization dataStructure={dataStructure} visualization={visualization} />
  }

  return (
    <>
      {/* TODO: Extract to above component to not depend on dataStructure here */}
      <h3 className="text-capitalize mt-4">{`${removeHyphens(
        dataStructure
      )} - visualization`}</h3>
      {visu}
    </>
  );
};

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;
