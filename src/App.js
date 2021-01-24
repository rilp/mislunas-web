import React from 'react';
import './App.css';
import logo from './logo.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Container >
          <Row>
              <img src={logo} className="logo" alt="Mis Lunas" />
              <hr/>
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
      <Row className={name}>
        <a href={info}>
          <img src={img} className={name} alt={name}/>
        </a>
      </Row>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <h2>Contacto</h2>
        <hr/>
        <Container className="contactCard">
          <ContactImage name={"email"} img={"./img/mail.svg"} info={"mailto:zayra.zambrano@gmail.com"}/>
          <ContactImage name={"facebook"} img={"./img/facebook.svg"} info={"https://www.facebook.com/zay.zambrano"}/>
          <ContactImage name={"whatsapp"} img={"./img/whatsapp.svg"} info={"https://wa.link/if9emg"}/>
        </Container>
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <Header/>
      <Contact/>
      <Container>
        <Row id="copyright">
          <span>Desarrolado y dise&ntilde;o por <a href="mailto:victor.baruch@gmail.com">Vic Baruch</a>. &copy; 2021. Todos los derechos reservados</span>
        </Row>
      </Container>
    </div>
  );
}

export default App;
