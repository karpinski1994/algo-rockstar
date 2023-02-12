
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { Visualization } from "@/components/Visualization";
import visualizationFactory from "@/components/Visualization/visualizationFactory";
import { DataStructurePageLayout } from ".";

const DataStructuresVisualizationPage = () => <Visualization />;

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;

export const getStaticPaths = () => {
    const paths = stackNavSettings.filter(({url}) => url.length > 1).map(({ url }) => {
      return buildUrl(url)+'/visualization';
    })
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps(context: any) {
    console.log(context);
    const {
      params: {
        dataStructure
      }
    } = context;
    const visualization = visualizationFactory(context.params.dataStructure);
    return {
      props: {
        dataStructure,
        visualization
      },
    };
  }