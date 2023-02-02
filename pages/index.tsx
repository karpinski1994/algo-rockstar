import StepsSlider from '@/components/StepsSlider';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Container, Dropdown, InputGroup, Form, Nav, Row, Navbar } from 'react-bootstrap';

export default function IndexPage() {
  const [item, setItem] = useState('')
  const [lista, setLista] = useState([]);
  const createFile = () => {
    
    fetch(`/api/user`).then((data) => {
      console.log('created successful')
    })
  }


  return (
    <div>
      <Container className="d-flex">
        <Button>Zapis 1</Button>
        <Button>Name</Button>
        <Button>Folder</Button>
        <Button onClick={createFile}> ZAPISZ</Button>


        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setItem(e.target.value)}
        />
      </InputGroup>
      <br />

      <br />
      <InputGroup size="lg">

      </InputGroup>
      <Button onClick={()=> setLista(lista => [...lista, item])}>Dodaj swinie</Button>
      <div className="elementy">
        {lista.map((el) => {
          return <Navbar.Text>{el}</Navbar.Text>
        })}

      </div>

    </div>
  );
}
