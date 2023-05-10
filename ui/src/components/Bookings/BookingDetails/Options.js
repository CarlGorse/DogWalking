import { Col, Row } from 'react-bootstrap';
import Select from 'components/Controls/Select';
import InputHint from 'components/Controls/InputHint';
import { useEffect, useState } from 'react';

function Options(props) {

  const [getCanAnotherDogJoin, setCanAnotherDogJoin] = useState('Please select');

  useEffect(() => {
    setCanAnotherDogJoin(props.data?.canOtherDogJoin ?? '');
  }, [props.data?.canOtherDogJoin])

  var isComplete = false;
  if (getCanAnotherDogJoin.length > 0 && getCanAnotherDogJoin !== 'Please select') {
    isComplete = true;
  }
  props.onSetInputs(isComplete);

  function onSetCanAnotherDogJoin(value) {
    setCanAnotherDogJoin(value);
  }

  return (

    <Row className="mt-0">
      <Col xs={3}>Can another dog join us?: <InputHint hint="Select Yes if you don't mind whether another dog joins our walk. Your cost will be reduced. Otherwise select No." /></Col>
      <Col xs={4}>
        <Select defaultValue={getCanAnotherDogJoin} onChange={e => onSetCanAnotherDogJoin(e.target.value)}
          options={
            <>
              <option>Please select</option>
              <option>Yes</option>
              <option>No</option>
            </>
          }
        />
      </Col>
      <Col></Col>
    </Row >

  );
}

export default Options;
