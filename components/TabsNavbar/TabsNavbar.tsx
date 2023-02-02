import React from 'react'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

type Props = {}

function TabsNavbar({ }: Props) {
    const router = useRouter();
    console.log('router: ', router)
    return <Nav variant="tabs" 
    // defaultValue={query.pathname + 'description'}
    >
        <Nav.Item>
            <Nav.Link href="/">Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/data-structures/linked-list">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav.Item>
    </Nav>
}

export default TabsNavbar