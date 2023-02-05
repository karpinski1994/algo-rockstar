import Visualization from "@/components/Visualization";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresVisualizationPage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <section>
      <Visualization route={dataStructure}/>
    </section>
  );
};

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;