import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { stackNavSettings, buildUrl } from './settings';

interface Props {
    url: string;
    title: string;
    active: boolean;
}

const NavElement = ({ url, title, active }: Props) => {
    if (!url) {
        return (<Navbar.Text className="w-100 w-md-auto text-dark fw-bold me-3 me-md-0">{title}</Navbar.Text>)
    }

    return <li className="me-5 me-md-0"> <Nav.Link className={active ? 'link-active' : ''} href={buildUrl(url)}>{title}</Nav.Link> </li>
}


function StackNavbar() {
    const { asPath } = useRouter();
    return (
        <Navbar variant="dark" className='col-md-3 flex-column col-sm-12 mt-5'>
            <p className="fw-bolder">Data structures</p>
            <ul className="d-flex flex-md-column justify-content-md-start flex-wrap align-items-center align-items-md-start">
                {
                    stackNavSettings.map((el, idx) => {
                        return <NavElement active={asPath.includes(el.url)} key={el.url + el.title + idx} url={el.url} title={el.title} />
                    })
                }
            </ul>
        </Navbar>
    );
}

export default StackNavbar;