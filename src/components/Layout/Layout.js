import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

//components
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Checkout from '../Shop/Checkout/Checkout';
import Orders from '../Shop/Orders/Orders';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';

//redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/allActions'


class Layout extends Component{
  componentDidMount(){
    this.props.authCheckState()
  }
  render() {
    let routes = (
      <Switch>
        <Route path={'/auth'} component={Auth}/>
        <Route exact path={'/'} component={Shop}/>
        <Redirect to={'/'}/>
      </Switch>
    )
    if(this.props.isAuth){
      routes = (
        <Switch>
        <Route path={'/checkout'} component={Checkout}/>
        <Route path={'/orders'} component={Orders}/>
        <Route path={'/logout'} component={Logout}/>
        <Route path={'/auth'} component={Auth}/>

        <Route exact path={'/'} component={Shop}/>
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