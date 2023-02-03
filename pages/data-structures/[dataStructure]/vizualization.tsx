import VizualizationSwitch from "@/components/VizualizationSwitch";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresVizualizationPage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <section>
      <VizualizationSwitch route={dataStructure}/>
    </section>
  );
};

DataStructuresVizualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVizualizationPage;