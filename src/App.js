import React from 'react';
import './App.css';
import logo from './logo.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Container >
          <Row>
              <img src={logo} className="logo" alt="Mis Lunas" />
              <hr></hr>
          </Row>
        </Container>
      </header>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <h2>Contacto</h2>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Header/>
      <Contact/>
    </div>
  );
}

export default App;
