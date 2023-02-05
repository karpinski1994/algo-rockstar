import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/rockstar-programmer-logo.svg';
import Image from 'next/image';

function HeaderNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home" className='d-flex align-items-center'>
        <Image className='me-3' src={logo} height={25} width={25} alt="Application logo"/>
          AlgoRockstar
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="#features">Features</Nav.Link>
            <Nav.Link className='text-light'  href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-light' href="#deets">More deets</Nav.Link>
            <Nav.Link className='text-light' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;