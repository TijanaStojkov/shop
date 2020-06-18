import React from 'react';

import Navbar from '../Navbar/Navbar';
import Shop from '../Shop/Shop';
import Checkout from '../Shop/Checkout/Checkout'

const layout = () => {
  return (
    <div>
      <Navbar/>
      <Shop/>
      <Checkout/>
    </div>
  );
}

export default layout;