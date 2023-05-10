import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container>

      <Row className="justify-content-md-center pt-5" >
        <Col xs={6}>Welcome!</Col>
      </Row >

      <Row className="justify-content-md-center pt-3">
        <Col xs={6}>We are ...</Col>
      </Row>
    </Container >
  );
}

export default Home;
