import Col from 'react-bootstrap/Col';
import InputHint from 'components/BookingDetails/InputHint';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog.canBeOffLead);
  }, []);

  function changeValue(value) {
    setValue(value);
    props.updateDog({ ...props.dog, ...{ canBeOffLead: getValue } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Can be let off the lead?: <InputHint hint="Can your dog be left off the lead in a park or countryside?" /></Col>
      <Col xs={6}>
        <select
          value={getValue}
          defaultValue='No'
          onChange={e => changeValue(e.target.value)}
        >
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

export default Name;
