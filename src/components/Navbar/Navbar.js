import React, { Component } from 'react';
import { Navbar, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { connect } from 'react-redux';

class Nav extends Component {
    render(){
        let classes = ['lighten-3'];
        if (this.props.isAuth){
            classes.push('green')
        }else{
            classes.push('red')
        }
        return(
<Navbar
        className={classes.join(' ')}
            alignLinks="left"
            brand={<NavLink className="brand-logo right " to='/' exact>Our Shop</NavLink>}
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
                preventScrolling: true,
            }}
            >
                <NavLink className='sidenav-close' to='/' exact>Shop</NavLink>
                
                {this.props.isAuth?
                <NavLink className='sidenav-close' to='/orders'>Your orders</NavLink>
                :null}
                {this.props.isAuth?
                <NavLink className='sidenav-close' to='/logout'>Sign out</NavLink>
                :<NavLink className='sidenav-close' to='/auth'>Sign in</NavLink>}
                
        </Navbar>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.token!==null,
    }
}
export default connect(mapStateToProps)(Nav);