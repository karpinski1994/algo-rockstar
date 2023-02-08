import Step from "@/components/Step";
import StepsSlider from "@/components/StepsSlider";
import visualizationFactory from "@/components/Visualization/visualizationFactory";
import Visualization from "@/components/Visualization/visualizationFactory";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresVisualizationPage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  const visualizationSteps = visualizationFactory(dataStructure)
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - visualization`}</h3>
      {visualizationSteps && <StepsSlider steps={visualizationSteps} />}
    </>
  );
};

DataStructuresVisualizationPage.getLayout = DataStructurePageLayout;

export default DataStructuresVisualizationPage;