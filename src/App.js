import React from 'react';
import './App.scss';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

import Layout from './components/Layout/Layout'


function App() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}

export default App;
