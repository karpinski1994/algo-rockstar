import { useRouter } from "next/router";
import { DataStructuresPageLayout } from "../index";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import nestLayout from "@/utils/layout/nenstLayout";
import TabsNavbar from "@/components/TabsNavbar/TabsNavbar";
import { Container } from "react-bootstrap";
import Markdown from "@/components/Markdown";

const DataStructurePage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - description`}</h3>
      <Markdown route={dataStructure} />
    </>
  );
};

const NestedLayout = ({ children }) => {
  const router = useRouter();
  const { dataStructure } = router.query;

  return (
    <Container className="mt-3">
      <TabsNavbar queryElement={dataStructure} />
      <section className="mt-4">{children}</section>
    </Container>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const DataStructurePageLayout = nestLayout(DataStructuresPageLayout, getLayout);

DataStructurePage.getLayout = DataStructurePageLayout;

export default DataStructurePage;