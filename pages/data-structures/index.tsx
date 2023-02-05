
const DataStructuresPage = () => {
  return <div>Placeholder</div>;
};

export const NestedLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export const DataStructuresPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

DataStructuresPage.getLayout = DataStructuresPageLayout;

export default DataStructuresPage;
