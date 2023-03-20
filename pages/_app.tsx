import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "styled-jsx/css";

import Container from "react-bootstrap/Container";
import StackNavbar from "@/components/StackNavbar";
import HeaderNavbar from "@/components/HeaderNavbar";
import Footer from "@/components/Footer";
import { Page } from "@/types/page";

interface PageProps {
  prop1: string;
  prop2: string;
}

const Layout = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: PageProps;
}): any => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container fluid className="p-0 main-wrapper">
      <HeaderNavbar />
      <div className="containerBox">
        <div className="row">
          <StackNavbar />
          <main className="col-md-9 col-12">
            <Layout Component={Component} pageProps={pageProps} />
          </main>
        </div>
      </div>
      <Footer />
      <style jsx>{layoutStyles}</style>
    </Container>
  );
}

const layoutStyles = css`
  .main-wrapper {
  }

  .containerBox {
    width: 100vw;
  }

  header {
    display: flex;
    align-items: center;
    min-height: 10%;
    margin-left: 20px;
  }

  .content {
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    background: blue;
    align-items: center;
    min-width: 150px;
  }

  main {
  }
`;
