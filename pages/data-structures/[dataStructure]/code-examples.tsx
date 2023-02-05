import CodeExample from "@/components/CodeExample";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresCodeExamplesPage = () => {
  const router = useRouter();
  // TODO: consider changing name 'dataStructure' because in the future it might be also an algorithm 
  const { dataStructure } = router.query;
  return (
    <>
        <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - code examples`}</h3>
        <CodeExample codeStructure={dataStructure} />
    </>
  );
};

DataStructuresCodeExamplesPage.getLayout = DataStructurePageLayout;

export default DataStructuresCodeExamplesPage;