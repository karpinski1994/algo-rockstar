
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { Visualization } from "@/components/Visualization";
import visualizationFactory from "@/components/Visualization/visualizationFactory";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { DataStructurePageLayout } from ".";

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

  const DataStructuresVisualizationPage = ({ visualization, dataStructure}) => {
    return (
      <>
        <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - visualization`}</h3>
        <Visualization visualization={visualization}/>
      </>
    );
  };
  
  DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;
  
  export default DataStructuresVisualizationPage;