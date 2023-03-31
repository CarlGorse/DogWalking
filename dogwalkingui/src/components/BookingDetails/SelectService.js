import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SelectService() {

  return (
    <Container>
      <b>Select service:</b>
      <Row>
        <Col></Col>
        <Col xs={4}>Service:</Col>
        <Col xs={4}>
          <select defaultValue='Please select'>
            <option>Please select</option>
            <option>Walk</option>
            <option>Play park</option>
            <option>Dog sitting</option>
          </select>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Type of walk:</Col>
        <Col xs={4}>
          <select defaultValue='Any'>
            <option>Any</option>
            <option>Town/street</option>
            <option>Park</option>
            <option>Countryside</option>
          </select>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SelectService;
