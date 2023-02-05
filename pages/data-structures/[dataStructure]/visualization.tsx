import Visualization from "@/components/Visualization";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresVisualizationPage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - visualization`}</h3>
      <Visualization route={dataStructure} />
    </>
  );
};

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;