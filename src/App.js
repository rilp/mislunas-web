import React from 'react';
import './App.css';
import logo from './logo.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Container>
          <Row className="justify-content-center">
            <Col xs={10}>
              <img src={logo} className="logo" alt="Mis Lunas" />
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <hr/>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

class ContactImage extends React.Component {
  render() {
    const img = this.props.img;
    const name = this.props.name;
    const info = this.props.info;
    return (
      <Row className={`link ${name}`} >
        <Col>
          <a href={info} target="_blank" rel="noreferrer"><img src={img} className="contactIcon" alt={name}/></a>
        </Col>
      </Row>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <Container id="contact" fluid>
        <Container>
          <Row>
            <Col>
              <h2>Contacto</h2>
              <hr/>
            </Col>
          </Row>
          <ContactImage name={"email"} img={"img/mail.svg"} info={"mailto:zayra.zambrano@gmail.com"}/>
          <ContactImage name={"facebook"} img={"img/facebook.svg"} info={"https://www.facebook.com/zay.zambrano"}/>
          <ContactImage name={"whatsapp"} img={"img/whatsapp.svg"} info={"https://wa.link/if9emg"}/>
        </Container>
      </Container>
    )
  }
}


function App() {
  return (
    <div>
      <Header/>
      <Contact/>
      <Container id="copyright" fluid>
        <Row>
          <Col>
            <span>Desarrollo y dise&ntilde;o por <a href="mailto:victor.baruch@gmail.com">Vic Baruch</a>. &copy; 2021. Todos los derechos reservados</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
