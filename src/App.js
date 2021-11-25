import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

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

function CalendarModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>Leer m&aacute;s...</Button>

      <Modal show={show} onHide={handleClose} size="xl" id="calendarModal">
        <Modal.Header closeButton>
          <Modal.Title>Calendario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src="img/calendar3.png" alt="Calendar January" className="cal1" thumbnail fluid/>
          <p>Aqu&iacute; tienes un calendario circular, con las fases de la luna que te permitir&aacute; observar como &ldquo;eres&rdquo; a lo largo de tu ciclo.&nbsp;</p>
          <p>Lo que me he encontrado es que cuando tienes el calendario en tus manos por primera vez quieres apuntar todo, o por el contrario, no sabes ni que apuntar. Y aunque puedes encontrar mil ideas de qu&eacute; y c&oacute;mo se&ntilde;alarlas, de verdad lo mejor es que apuntes lo que para ti es significativo durante tres periodos seguidos. Durante estos tres periodos, solo apunta. No te presiones por si es lo mismo que el mes anterior. Solo registra. Una vez pasados esos tres periodos, obs&eacute;rvalos. Es momento de buscar algunas similitudes en tus experiencias o s&iacute;ntomas. Relacionar los s&iacute;ntomas f&iacute;sicos con los emocionales. Lo que desde mi experiencia personal y como terapeuta s&iacute; te puedo garantizar que poner especial atenci&oacute;n en la alimentaci&oacute;n es b&aacute;sico. &nbsp;</p>
          <p>En este momento quiz&aacute; ya tienes informaci&oacute;n que pude servir para saber tus ritmos, tus s&iacute;ntomas. Y aunque todas compartimos la biolog&iacute;a que nos permite ser seres fecundos y creativos, cada una de nosotras tenemos nuestras particular manera de relacionarnos con la luna, con nuestra sangre, con nuestro entorno.&nbsp;</p>
          <p>Llegar&aacute; el momento en que reconozcas tu propio cuerpo, como se comporta en primavera, que es tan diferente durante el invierno. Y aunque es el mismo ciclo femenino con las mismas hormonas, cambia conforme la estaci&oacute;n que esta viviendo.&nbsp;</p>
          <Image src="img/calendar2.png" alt="Calendar Extra" className="cal2" thumbnail fluid/>
          <p>Te aconsejo que en la hoja en blanco de cada mes apuntes tu iconograf&iacute;a, sobre todo si agregas algo que no hab&iacute;as apuntado meses anteriores. Porque al pasar el tiempo puedes olvidar lo que para ti significaba determinado dibujo (icono), sobretodo si no estas acostumbrada a llevar un registro.&nbsp;</p>
          <p>Si piensas que no importa, cr&eacute;elo. S&iacute; importa. Para la medicina occidental le basta saber cuando acab&oacute; y duro tu periodo pasado. Para que t&uacute; sepas c&oacute;mo estas y qu&eacute; pasa en ti, necesitas reconocerte como un ser unificado, como un todo y ese todo te contempla a lo largo de tu historia. Es decir que la primavera pasada tambi&eacute;n puede arrojar informaci&oacute;n importante de lo que estas viviendo en este invierno.&nbsp;</p>
          <p>Para mi que he usado este calendario por a&ntilde;os, te puedo platicar que me ha servido para recordar mis saberes en cuanto a fertilidad, a reconocer lo necesario que era modificar mi alimentaci&oacute;n, a eliminar problemas de candidiasis, y varias cosas m&aacute;s.</p>
          <p>Permite que tu intuici&oacute;n te guie para usar tu calendario y si en alg&uacute;n momento quieres apoyo, ll&aacute;mame. Estar&eacute; encantada de poner a tu disposici&oacute;n todo lo que he aprendido y experimentado que te pueda ser de utilidad.&nbsp;</p>
          <p>Este apoyo puede servir sobretodo en momento que tengas dudas respecto a los otros fluidos a lo largo del ciclo, o si tienes dudas en alternativas de captaci&oacute;n de tu sangre para poder reconocer cantidad y como esta de salud, etc.&nbsp;</p>
          <p>Deseo que la compa&ntilde;&iacute;a de la luna a lo largo de tus d&iacute;as sea una consejera que escuches desde tu interior.&nbsp;</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class Calendar extends React.Component {
  render() {
    return (
      <section id="calendar">
        <Container>
          <Row>
            <Col sm={12} md={{span: 6, order: 'last' }} className="collage">
              <Image src="img/calendar1.png" alt="Calendar Frontpage" className="cal1" thumbnail fluid/>
              <Image src="img/calendar2.png" alt="Calendar Extra" className="cal2" thumbnail fluid/>
              <Image src="img/calendar3.png" alt="Calendar January" className="cal3" thumbnail fluid/>
            </Col>
            <Col sm={12} md={6}>
                <h2>Calendario</h2>
                <hr/>
                <Row className="justify-content-center">
                  <Col lg={10}>
                    <p>Aquí tienes un calendario circular, con las fases de la luna que te permitir&aacute; observar como “eres” a lo largo de tu ciclo. </p>
                    <p>He usado este calendario por a&ntilde;os y te puedo platicar que me ha servido para recordar mis saberes en cuanto a fertilidad, a reconocer lo necesario que era modificar mi alimentaci&oacute;n, a eliminar problemas de candidiasis y varias cosas m&aacute;s.</p>
                    <Row>
                      <Col><CalendarModal/></Col>
                      <Col><Button variant="outline-info" href="https://buy.stripe.com/4gw7tO1HM4xs1gIeUU">Comprar ahora</Button></Col>
                    </Row>
                    <br/>&nbsp;
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </section>
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
          <Row className="justify-content-md-center">
            <Col sm="3" ></Col>
            <Col><ContactImage name={"email"} img={"img/mail.svg"} info={"mailto:amo.mis.lunas@gmail.com"}/></Col>
            <Col><ContactImage name={"whatsapp"} img={"img/whatsapp.svg"} info={"https://wa.link/4v2tii"}/></Col>
            <Col><ContactImage name={"facebook"} img={"img/facebook.svg"} info={"https://www.facebook.com/zay.zambrano"}/></Col>
            <Col><ContactImage name={"instagram"} img={"img/instagram.svg"} info={"https://www.instagram.com/calmazambrano/"}/></Col>
            <Col sm="3"></Col>
          </Row>
          
          
        </Container>
      </Container>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container id="copyright">
          <Row>
            <Col>
              <span>Desarrollo y dise&ntilde;o por <a href="mailto:victor.baruch@gmail.com">Vic Baruch</a>. &copy; {new Date().getFullYear()}. Todos los derechos reservados</span>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}


function App() {
  return (
    <div>
      <Header/>
      <Calendar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
