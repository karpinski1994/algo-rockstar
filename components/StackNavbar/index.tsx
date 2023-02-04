import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { stackNavSettings, buildUrl } from './settings';

const NavElement = ({ url, title, active }) => {
    if (!url) {
        return (<ul> <Navbar.Text className="text-dark">{title}</Navbar.Text> </ul>)
    }

    return <li> <Nav.Link className={active ? 'link-active' : ''} href={buildUrl(url)}>{title}</Nav.Link> </li>
}


function StackNavbar() {
    const { asPath } = useRouter();
    return (
        <Navbar variant="dark" className='flex-column mt-5'>
            {
                stackNavSettings.map((el, idx) => {
                    return <NavElement active={el.url && asPath?.includes(el.url)} key={el.url + el.title + idx} url={el.url} title={el.title} />
                })
            }
        </Navbar>
    );
}

export default StackNavbar;