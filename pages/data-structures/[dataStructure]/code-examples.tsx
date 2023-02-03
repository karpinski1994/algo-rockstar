import { useRouter } from "next/router";
import { DataStructurePageLayout } from ".";

const DataStructuresCodeExamplesPage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <section>
      <h3>{dataStructure} Code Examples</h3>
    </section>
  );
};

DataStructuresCodeExamplesPage.getLayout = DataStructurePageLayout;

export default DataStructuresCodeExamplesPage;