import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
