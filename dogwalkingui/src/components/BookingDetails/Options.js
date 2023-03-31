import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Options() {
  return (

    <Container>
      <b>Options</b>
      <Row>
        <Col></Col>
        <Col xs={4}>Can another dog join your walk (at reduced cost?):</Col>
        <Col xs={4}>
          <select defaultValue='No'>
            <option>Yes</option>
            <option>No</option>
          </select>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Options;
