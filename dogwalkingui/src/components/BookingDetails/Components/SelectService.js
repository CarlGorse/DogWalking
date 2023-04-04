import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'components/Forms/Select';
import { useState } from 'react';

function SelectService(props) {

  const [getService, setService] = useState('Please select');
  const [getTypeOfWalk, setTypeOfWalk] = useState('Please select');

  var isComplete = false;
  if ((getService != 'Please select')
    && (getTypeOfWalk != 'Please select')) {
    isComplete = true;
  }
  props.onSetInputs(isComplete);

  function onSetService(value) {
    setService(value);
  }

  function onSetTypeOfWalk(value) {
    setTypeOfWalk(value);
  }

  return (
    <>
      <Row className="mt-1">
        <Col xs={3}>Service:</Col>
        <Col xs={6}>
          <Select defaultValue='Please select' onChange={e => onSetService(e.target.value)}
            options={
              <>
                <option>Please select</option>
                <option>Walk</option>
                <option>Play park</option>
                <option>Dog sitting</option>
              </>
            }
          />
        </Col>
        <Col></Col>
      </Row >
      <Row className="mt-1">
        <Col xs={3}>Type of walk:</Col>
        <Col xs={6}>
          <Select defaultValue='Please select' onChange={e => onSetTypeOfWalk(e.target.value)}
            options={
              <>
                <option>Please select</option>
                <option>Any</option>
                <option>Town/street</option>
                <option>Park</option>
                <option>Countryside</option>
              </>
            }
          />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default SelectService;
