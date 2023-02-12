import Quiz from "@/components/Quiz";
import questionsFactory from "@/components/Quiz/questionsFactory";
import { buildUrl, stackNavSettings } from "@/components/StackNavbar/settings";
import { DataStructurePageLayout } from ".";

const DataStructuresQuizPage = () =>  <Quiz />;

DataStructuresQuizPage.getLayout = DataStructurePageLayout;

export default DataStructuresQuizPage;

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
    console.log(context);
    const {
      params: {
        dataStructure
      }
    } = context;
    const questions = questionsFactory(context.params.dataStructure);
    return {
      props: {
        dataStructure,
        questions
      },
    };
  }