import Col from 'react-bootstrap/Col';
import InputHint from './InputHint';
import Row from 'react-bootstrap/Row';

function Options(props) {

  var canAnotherDogJoin;

  function onSetInputs() {
    var isComplete = false;
    if (canAnotherDogJoin != 'Please select') {
      isComplete = true;
    }
    props.onSetInputs(isComplete);
  }

  function setCanAnotherDogJoin(value) {
    canAnotherDogJoin = value;
    onSetInputs();
  }

  return (

    <Row className="mt-0">
      <Col xs={3}>Can another dog join us?: <InputHint hint="Select Yes if you don't mind whether another dog joins our walk. Your cost will be reduced. Otherwise select No." /></Col>
      <Col xs={4}>
        <select defaultValue='Please select' onChange={e => setCanAnotherDogJoin(e.target.value)}>
          <option>Please select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Col>
      <Col></Col>
    </Row>

  );
}

export default Options;
