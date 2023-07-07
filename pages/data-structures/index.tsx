import TabsNavbar from "@/components/TabsNavbar";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const DataStructuresPage = () => {
  return <div>Placeholder</div>;
};

export const NestedLayout = ({ children }: {children: ReactNode}) => {
  const router = useRouter();

  const { dataStructure } = router.query;

  return (
    <>
      <TabsNavbar queryElement={dataStructure} />

      {children}
    </>
  );
};

export const DataStructuresPageLayout = (page: ReactNode) => <NestedLayout>{page}</NestedLayout>;

DataStructuresPage.getLayout = DataStructuresPageLayout;

export default DataStructuresPage;
