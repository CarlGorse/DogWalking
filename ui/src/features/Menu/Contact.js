import { Col, Container, Row } from 'react-bootstrap';

function Contact() {
  return (
    <>
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
