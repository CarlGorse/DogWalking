import { Col, Row } from 'react-bootstrap'; import Select from 'components/Controls/Select';
import { useEffect, useState } from 'react';

function SelectService({ data, onSetInputs }) {

  const [getService, setService] = useState('Please select');
  const [getTypeOfWalk, setTypeOfWalk] = useState('Please select');

  useEffect(() => {
    setService(data?.service ?? '');
    setTypeOfWalk(data?.typeOfWalk ?? '');
  }, [data?.service, data?.typeOfWalk])

  var isComplete = false;
  if ((getService.length > 0 && getService !== 'Please select')
    && (getTypeOfWalk.length > 0 && getTypeOfWalk !== 'Please select')) {
    isComplete = true;
  }
  onSetInputs(isComplete);

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
          <Select defaultValue={getService} onChange={e => onSetService(e.target.value)}
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
          <Select defaultValue={getTypeOfWalk} onChange={e => onSetTypeOfWalk(e.target.value)}
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
