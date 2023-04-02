import Col from 'react-bootstrap/Col';
import InputHint from './InputHint';
import Row from 'react-bootstrap/Row';

function Options() {
  return (

    <Row className="mt-0">
      <Col xs={3}>Can another dog join us?: <InputHint hint="Select Yes if you don't mind whether another dog joins our walk. Your cost will be reduced. Otherwise select No." /></Col>
      <Col xs={4}>
        <select defaultValue='No'>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Col>
      <Col></Col>
    </Row>

  );
}

export default Options;
