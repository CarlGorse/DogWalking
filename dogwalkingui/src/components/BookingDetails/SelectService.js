import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SelectService() {

  return (
    <div style={{ border: '1px solid black' }}>
      <b>Options</b>
      <Container>
        <Row>
          <Col>Service:</Col>
          <Col>
            <select defaultValue='Please select'>
              <option>Please select</option>
              <option>Walk</option>
              <option>Play park</option>
              <option>Dog sitting</option>
            </select></Col>
        </Row>
        <Row>
          <Col>Type of walk:</Col>
          <Col>
            <select defaultValue='Any'>
              <option>Any</option>
              <option>Town/street</option>
              <option>Park</option>
              <option>Countryside</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectService;
