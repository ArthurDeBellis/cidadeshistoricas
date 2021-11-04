import './App.css';
import React from 'react';
//eslint-disable-next-line
import ReactDOM from 'react-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import Footer from './pages/components/Footer';
import Home from './pages/home/home'
import Congonhas from './pages/congonhas/congonhas';
import Diamantina from './pages/diamantina/diamantina';
import Mariana from './pages/mariana/mariana';
import Ouro_Preto from './pages/ouro-preto/ouro_preto';
import Sabara from './pages/sabara/sabara';
import Sao_Joao_Delrei from './pages/sao-joao-delrei/sao_joao_delrei';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
      <Navbar.Brand href="/">Cidades Históricas</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example" className='menu-guia'>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Guia"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/ouro-preto">Ouro Preto</NavDropdown.Item>
          <NavDropdown.Item href="/congonhas">Congonhas</NavDropdown.Item>
          <NavDropdown.Item href="/diamantina">Diamantina</NavDropdown.Item>
          <NavDropdown.Item href="/mariana">Mariana</NavDropdown.Item>
          <NavDropdown.Item href="/sabara">Sabará</NavDropdown.Item>
          <NavDropdown.Item href="/sao-joao-delrei">São João Delrei</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/congonhas" component={Congonhas} exact />
        <Route path="/diamantina" component={Diamantina} exact />
        <Route path="/mariana" component={Mariana} exact />
        <Route path="/ouro-preto" component={Ouro_Preto} exact />
        <Route path="/sabara" component={Sabara} exact />
        <Route path="/sao-joao-delrei" component={Sao_Joao_Delrei} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
