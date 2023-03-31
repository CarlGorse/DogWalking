import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Options() {
  return (
    <div style={{ border: '1px solid black' }}>
      <b>Options</b>
      <Container>
        <Row>
          <Col>Can another dog join your walk (at reduced cost?):</Col>
          <Col>
            <select defaultValue='No'>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Options;
