import CodeExample from "@/components/CodeExample";
import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresCodeExamplesPage = () => {
  const router = useRouter();
  // TODO: consider changing name 'dataStructure' because in the future it might be also an algorithm 
  const { dataStructure } = router.query;
  return (
    <section>

      <h3>{dataStructure} Code Examples</h3>
      <CodeExample dataStructure={dataStructure}/>
    </section>
  );
};

DataStructuresCodeExamplesPage.getLayout = DataStructurePageLayout;

export default DataStructuresCodeExamplesPage;