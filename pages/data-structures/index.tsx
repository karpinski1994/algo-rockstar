import React, { ReactNode } from "react";

const DataStructuresPage = () => {
  return <div>Placeholder</div>;
};

export const NestedLayout = ({ children }: {children: ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const DataStructuresPageLayout = (page: ReactNode) => <NestedLayout>{page}</NestedLayout>;

DataStructuresPage.getLayout = DataStructuresPageLayout;

export default DataStructuresPage;
