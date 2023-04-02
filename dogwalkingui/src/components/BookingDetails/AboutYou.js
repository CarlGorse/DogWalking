import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AboutYou() {

  return (
    <>
      <Row className="mt-1">
        <Col xs={3}>Name:</Col>
        <Col xs={9}><input style={{ width: "100%" }} type='textbox' placeholder="Your name"></input></Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Post code:</Col>
        <Col xs={2}><input style={{ width: "100%" }} type='textbox' placeholder="AA1 1AA"></input></Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Property number/name:</Col>
        <Col xs={4}><input style={{ width: "100%" }} type='textbox'></input></Col>
        <Col></Col>
      </Row>
      <Row className="mt-1">
        <Col xs={3}>Location details:</Col>
        <Col xs={9}><input style={{ width: "100%" }} type='textbox' placeholder="Any other details that will help to locate you"></input></Col>
        <Col></Col>
      </Row>
    </>

  );
}

export default AboutYou;
