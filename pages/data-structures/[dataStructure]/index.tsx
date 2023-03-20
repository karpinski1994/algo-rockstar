import { useRouter } from "next/router";
import { DataStructuresPageLayout } from "../index";
import { removeHyphens } from "@/utils/strings/removeHyphens";
import nestLayout from "@/utils/layout/nenstLayout";
import TabsNavbar from "@/components/TabsNavbar";
import { Container } from "react-bootstrap";
import Markdown from "@/components/Markdown";
import { ReactNode, useEffect } from "react";
import markdownFactory from "@/components/Markdown/markdownFactory";
import { buildUrl, stackNavSettings } from '@/components/StackNavbar/settings';

interface Props {
  dataStructure: string;
  markdown: string;
  context: object;
  }

export const getStaticPaths = () => {
  const paths = stackNavSettings.filter(({url}) => url.length > 1).map(({ url }) => {
    return buildUrl(url)
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  const {
    params: {
      dataStructure
    }
  } = context;
  const markdown = markdownFactory(context.params.dataStructure);
  return {
    props: {
      dataStructure,
      markdown
    },
  };
}


const DataStructurePage = ({ dataStructure, markdown }: Props) => {
  return (
    <>
      <h3 className="text-capitalize mt-4">{`${removeHyphens(dataStructure)} - description`}</h3>
      <Markdown markdown={markdown} />
    </>
  );
};

const NestedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { dataStructure } = router.query;

  return (
    <Container className="mt-3">
      <TabsNavbar queryElement={dataStructure} />
      <section className="mt-4">{children}</section>
    </Container>
  );
};

const getLayout = (page: ReactNode) => <NestedLayout>{page}</NestedLayout>;

export const DataStructurePageLayout = nestLayout(DataStructuresPageLayout, getLayout);

DataStructurePage.getLayout = DataStructurePageLayout;

export default DataStructurePage;