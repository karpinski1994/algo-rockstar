import { useRouter } from 'next/router';
import React from 'react'
import { Nav } from 'react-bootstrap'
import navItems from './settings';
type Props = {
    queryElement: any
}

const addActiveClass = (currentUrl: string, linkUrl: string) => currentUrl === linkUrl ? 'active' : '';

function TabsNavbar({ queryElement }: Props) {
    const router = useRouter();
    const { asPath } = router;
    return (
    <Nav fill variant="tabs">
        {
            navItems.map((item) => (
                <Nav.Item key={item.name}>
                    <Nav.Link 
                        className={addActiveClass(
                            asPath, 
                                `/data-structures/${queryElement}/${item.href}`
                        )}
                        href={`/data-structures/${queryElement}/${item.href}`}
                    >
                        {item.name}
                    </Nav.Link>
                </Nav.Item>
            ))
        }
    </Nav>
    )
}

export default TabsNavbar