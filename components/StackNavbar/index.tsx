import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { stackNavSettings, buildUrl } from './settings';

const NavElement = ({ url, title, active }) => {
    if (!url) {
        return (<Navbar.Text className="text-dark fw-bold me-3 me-md-0">{title}</Navbar.Text>)
    }

    return <li className="me-5 me-md-0"> <Nav.Link className={active ? 'link-active' : ''} href={buildUrl(url)}>{title}</Nav.Link> </li>
}


function StackNavbar() {
    const { asPath } = useRouter();
    return (
        <Navbar variant="dark" className='col-lg-2 col-sm-12 flex-column mt-5'>
            <p className="fw-bolder">Data structures</p>
            <ul className="d-flex flex-md-column flex-wrap align-items-center align-items-md-start">
                {
                    stackNavSettings.map((el, idx) => {
                        return <NavElement active={el.url && asPath?.includes(el.url)} key={el.url + el.title + idx} url={el.url} title={el.title} />
                    })
                }
            </ul>
        </Navbar>
    );
}

export default StackNavbar;