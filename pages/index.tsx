import StepsSlider from '@/components/StepsSlider';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Container, Dropdown, InputGroup, Form, Navbar } from 'react-bootstrap';

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
      Placeholder
    </div>
  );
}
