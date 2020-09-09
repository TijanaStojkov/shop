import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const nav = () => {
    return (
        <Navbar
        className="red lighten-3"
            alignLinks="left"
            brand={<a className="brand-logo right " href="google.com">Our shop</a>}
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
                <NavLink to='/' exact>Shop</NavLink>
                <NavLink to='/Orders'>Orders</NavLink>
        </Navbar>
    )
}

export default nav;