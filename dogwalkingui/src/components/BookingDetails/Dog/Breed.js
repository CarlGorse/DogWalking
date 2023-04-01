import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog.breed);
  }, []);

  function changeValue(value) {
    setValue(value);
    props.updateDog({ ...props.dog, ...{ breed: getValue } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Breed:</Col>
      <Col xs={6}>
        <select
          value={getValue}
          defaultValue='Other'
          onChange={e => changeValue(e.target.value)}
        >
          <option>Please select</option>
          <option>Cockapoo</option>
          <option>Spaniel</option>
          <option>Labrador</option>
          <option>Other</option>
        </select>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Name;
