import { useRouter } from "next/router";
import { DataStructuresPageLayout } from "../index";
import { useEffect } from "react";
import nestLayout from "@/utils/nenstLayout";
import TabsNavbar from "@/components/TabsNavbar/TabsNavbar";
import { Container } from "react-bootstrap";
import Markdown from "@/components/Markdown";

const DataStructurePage = () => {
  const router = useRouter();
  const { dataStructure } = router.query;
  return (
    <section>
      <Markdown route={dataStructure}/>
    </section>
  );
};

const NestedLayout = ({ children }) => {
  const router = useRouter();
  const { dataStructure } = router.query;

  return (
    <Container className="w-100 mt-3">
        <TabsNavbar queryElement={dataStructure}/>
      <section>{children}</section>
    </Container>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const DataStructurePageLayout = nestLayout(DataStructuresPageLayout, getLayout);

DataStructurePage.getLayout = DataStructurePageLayout;

export default DataStructurePage;