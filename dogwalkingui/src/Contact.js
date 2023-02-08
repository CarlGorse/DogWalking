import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <>
    <p>Please feel free to contact me via any of the following:</p>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>mobile / text:</Col>
        <Col xs={6}>07111222333</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6}>e-mail</Col>
        <Col xs={6}>sdsd@sd.com</Col>
      </Row>
    </Container>
    </>
  );
}

export default Contact;
