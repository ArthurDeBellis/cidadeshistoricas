import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Rotas from './Rotas';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <Rotas />
      <Footer />
    
    </BrowserRouter>
  );
}

export default App;
