import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize'

const nav = () => {
    return (
        <Navbar
            alignLinks="left"
            brand={<a className="brand-logo right" href="#">Logo</a>}
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem onClick={function noRefCheck(){}}>
                Getting started
            </NavItem>
            <NavItem href="components.html">
                Components
            </NavItem>
        </Navbar>
    )
}

export default nav;