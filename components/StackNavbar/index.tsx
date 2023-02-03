import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { stackNavSettings, buildUrl } from './settings';

const NavElement = ({ url, title, active }) => {
    if (!url) {
        return (<Navbar.Text>{title}</Navbar.Text>)
    }

    return <Nav.Link className={active ? 'link-active' : ''} href={buildUrl(url)}>{title}</Nav.Link>
}


function StackNavbar() {
    const { asPath } = useRouter();
    console.log("🚀 ~ file: index.tsx:17 ~ StackNavbar ~ asPath", asPath)
    return (
        <Navbar variant="dark" className='flex-column mt-5'>
            {
                stackNavSettings.map((el, idx) => {
                    asPath?.includes(el.url) && console.log('el.url ', el.url)
                    return <NavElement active={el.url && asPath?.includes(el.url)} key={el.url + el.title + idx} url={el.url} title={el.title} />
                }
                )
            }
        </Navbar>
    );
}

export default StackNavbar;