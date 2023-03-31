import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AboutYou() {

  return (
    <div style={{ border: '1px solid black' }}>
      <b>About you</b>
      <Container>
        <Row>
          <Col>Name:</Col>
          <Col><input type='textbox' placeholder="Your name"></input></Col>
        </Row>
        <Row>
          <Col>Post code:</Col>
          <Col><input type='textbox' placeholder="AA1 1AA"></input></Col>
        </Row>
        <Row>
          <Col>Property number/name:</Col>
          <Col>
            <select>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>Location details:</Col>
          <Col><input type='textbox' placeholder="Any other details that will help to locate you"></input></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutYou;
