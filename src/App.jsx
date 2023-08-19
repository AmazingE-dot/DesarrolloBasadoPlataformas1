import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

export function App() {
  return (

    <Row className='mt-5'>
      <Col className='m-auto' xs={12} md={6}>
        <Container>
          <Card>
            <Card.Header className='class-header-title pt-4'>
              <p className='font-superior text-start'>CORPORACION UNIVERSITARIA MINUTO DE DIOS</p>
            </Card.Header>
            <Card.Body>
              <h5>Facultad De Ingenieria</h5>
              <h6>Ingenieria de sistemas</h6>
              <p className='desarrolloBasado mt-4'>DESARROLLO BASADO EN PLATAFORMAS</p>
              <p>Hola: Gustavo Tabares</p>
              <p>Estudiante: Carlos Eduardo Leon Bedoya</p>
              <a className='moodleBtn' href="https://presencial.aulasuniminuto.edu.co/course/view.php?id=11213">IR A MOODLE</a>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
  );
}