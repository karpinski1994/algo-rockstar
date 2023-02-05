import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import css from 'styled-jsx/css'

import Container from 'react-bootstrap/Container';
import StackNavbar from '@/components/StackNavbar';
import HeaderNavbar from '@/components/HeaderNavbar/HeaderNavbar';
import TabsNavbar from '@/components/TabsNavbar/TabsNavbar';

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (<Container fluid className="p-0 main-wrapper">
    <HeaderNavbar />
    <div className='row'>
      <StackNavbar />
      <main className='col-10'>
        <Layout Component={Component} pageProps={pageProps} />
      </main>
    </div>
    <style jsx>{layoutStyles}</style>
  </Container>)
}

const layoutStyles = css`
.main-wrapper {
  height: 100vh;
}

.container {
  height: 100vh;
  width: 100vw;
}

header {
  display: flex;
  align-items: center;
  min-height: 10%;
  margin-left: 20px;
}

.content {
  display:flex;
  flex-direction:row;
  text-align: center; 
  height: 90%;
}

nav {
  display: flex;
  flex-direction: column;
  background: blue;
  align-items: center;
  min-width: 150px;
}

main {
  height: calc(100vh - 56px);
}
`
