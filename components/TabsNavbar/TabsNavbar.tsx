import { useRouter } from 'next/router';
import React from 'react'
import { Nav } from 'react-bootstrap'
type Props = {
    queryElement: any
}


function TabsNavbar({ queryElement }: Props) {
    const router = useRouter();

    return <Nav fill variant="tabs"
    >
         <Nav.Item>
            <Nav.Link
                href={`/data-structures/${queryElement}/`}>Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                href={`/data-structures/${queryElement}/vizualization`}>Vizualization</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                href={`/data-structures/${queryElement}/code-examples`}>Code Examples</Nav.Link>
        </Nav.Item>
    </Nav>
}

export default TabsNavbar