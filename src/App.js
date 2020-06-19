import React from 'react';
import './App.scss';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
      
  );
}

export default App;
