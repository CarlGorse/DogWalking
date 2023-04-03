import Col from 'react-bootstrap/Col';
import InputHint from '../../../InputHint';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function CanBeLetOffLead(props) {

  //const [getValue, setValue] = useState('');

  //props.updateDog({ ...props.dog, ...{ canBeOffLead: getValue } });

  useEffect(() => {
    //setValue(props.dog.canBeOffLead);
  }, []);

  function changeValue(value) {
    //setValue(value);
    props.updateDog({ ...props.dog, ...{ canBeOffLead: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Can be let off the lead?: <InputHint hint="Can your dog be left off the lead in a park or countryside?" /></Col>
      <Col xs={6}>
        <select
          //value={getValue}
          defaultValue='Please select'
          onChange={e => changeValue(e.target.value)}
        >
          <option>Please select</option>
          <option>Either</option>
          <option>Countryside only</option>
          <option>Park only</option>
          <option>No</option>
        </select>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default CanBeLetOffLead;
