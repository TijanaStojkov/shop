import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

//components
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import asyncComponent from '../hoc/asyncComponent/asyncComponent'

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/allActions'

const asyncAuth = asyncComponent(() => {
  return import('../Auth/Auth')
})
const asyncCheckout = asyncComponent(() => {
  return import('../Shop/Checkout/Checkout')
})
const asyncOrders = asyncComponent(() => {
  return import('../Shop/Orders/Orders')
})
const asyncLogout = asyncComponent(() => {
  return import('../Auth/Logout/Logout')
})

class Layout extends Component{
  componentDidMount(){
    this.props.authCheckState()
  }
  render() {
    let routes = (
      <Switch>
        <Route path={'/auth'} component={asyncAuth}/>
        <Route exact path={'/'} component={Shop}/>
        <Redirect to={'/'}/>
      </Switch>
    )
    if(this.props.isAuth){
      routes = (
        <Switch>
        <Route exact path={'/'} component={Shop}/>
        <Route path={'/checkout'} component={asyncCheckout}/>
        <Route path={'/orders'} component={asyncOrders}/>
        <Route path={'/logout'} component={asyncLogout}/>
        <Route path={'/auth'} component={asyncAuth}/>

        <Redirect to={'/'}/>
      </Switch>
      )
    }
    return (
    <div>
      <Navbar/>
      {routes}
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.token!==null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(actions.authCheckState()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);