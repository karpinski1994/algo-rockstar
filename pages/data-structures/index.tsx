
const DataStructuresPage = () => {
  return <div>Placeholder</div>;
};

export const NestedLayout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const DataStructuresPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

DataStructuresPage.getLayout = DataStructuresPageLayout;

export default DataStructuresPage;
