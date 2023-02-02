import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { stackNavSettings } from './settings';

const NavElement = ({ url, title }) => {
    if (!url) {
        return (<Navbar.Text>{title}</Navbar.Text>)
    }

    return <Nav.Link href={url}>{title}</Nav.Link>
}


function StackNavbar() {
    return (
        <Navbar variant="dark" className='flex-column'>
            {
                stackNavSettings.map((el, idx) => <NavElement key={el.url + el.title + idx} url={el.url} title={el.title} />
                )
            }
        </Navbar>
    );
}

export default StackNavbar;