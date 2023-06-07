import TabsNavbar from "@/components/TabsNavbar";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

const PuzzlesPage = () => {
  return <div>Placeholder</div>;
};

export const NestedLayout = ({ children }: {children: ReactNode}) => {
    const router = useRouter();
    const { dataStructure } = router.query;
    console.log("🚀 ~ file: index.tsx:13 ~ NestedLayout ~ dataStructure:", dataStructure)
  return (
    <Container className="mt-3 h-100">
      <TabsNavbar queryElement={dataStructure} />
      <section className="mt-4 h-100">{children}</section>
    </Container>
  );
};

export const PuzzlesPageLayout = (page: ReactNode) => <NestedLayout>{page}</NestedLayout>;

PuzzlesPage.getLayout = PuzzlesPageLayout;

export default PuzzlesPage;
