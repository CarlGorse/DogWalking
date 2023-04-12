import Col from 'react-bootstrap/Col';
import Select from 'components/Forms/Select';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Breed(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog.breed ?? '');
  }, [])

  function changeValue(value) {
    setValue(value);
    props.updateDog({ ...props.dog, ...{ breed: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Breed:</Col>
      <Col xs={3}>
        <Select
          defaultValue={getValue}
          onChange={e => changeValue(e.target.value)}
          options={<>
            <option>Please select</option>
            <option>Cockapoo</option>
            <option>King Charles</option>
            <option>Labrador</option>
            <option>Spaniel</option>
            <option>Other</option>
          </>
          }
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Breed;
