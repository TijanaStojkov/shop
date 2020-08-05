import React from 'react';
import { Route, Switch } from 'react-router-dom'

//components
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Checkout from '../Shop/Checkout/Checkout';
import Orders from '../Shop/Orders/Orders'

const layout = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path={'/'} component={Shop}/>
        <Route path={'/checkout'} component={Checkout}/>
        <Route path={'/orders'} component={Orders}/>
      </Switch>
    </div>
  );
}

export default layout;