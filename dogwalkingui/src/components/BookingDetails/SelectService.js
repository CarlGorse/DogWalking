import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SelectService() {

  return (
    <>
      <b>Select service:</b>
      <Row>
        <Col xs={3}>Service:</Col>
        <Col xs={6}>
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
        <Col xs={3}>Type of walk:</Col>
        <Col xs={6}>
          <select defaultValue='Any'>
            <option>Any</option>
            <option>Town/street</option>
            <option>Park</option>
            <option>Countryside</option>
          </select>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default SelectService;
