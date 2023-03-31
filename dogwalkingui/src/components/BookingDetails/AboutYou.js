import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AboutYou() {

  return (
    <>

      <b>About you</b>
      <Row>
        <Col></Col>
        <Col xs={4}>Name:</Col>
        <Col xs={4}><input type='textbox' placeholder="Your name"></input></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Post code:</Col>
        <Col xs={4}><input type='textbox' placeholder="AA1 1AA"></input></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Property number/name:</Col>
        <Col xs={4}>
          <select>
          </select>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Location details:</Col>
        <Col xs={4}><input type='textbox' placeholder="Any other details that will help to locate you"></input></Col>
        <Col></Col>
      </Row>
    </>

  );
}

export default AboutYou;
