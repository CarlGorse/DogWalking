import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>Welcome!</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6}>Please choose from the above menu.</Col>
      </Row>
    </Container>
  );
}

export default Home;
