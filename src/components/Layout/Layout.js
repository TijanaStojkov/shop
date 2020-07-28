import React from 'react';
import { Route } from 'react-router-dom'

//components
import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Checkout from '../Shop/Checkout/Checkout'

const layout = () => {
  return (
    <div>
      <Navbar/>
      <Route exact path={'/'} component={Shop}/>
      <Route path={'/checkout'} component={Checkout}/>
    </div>
  );
}

export default layout;