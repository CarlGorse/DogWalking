import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'components/Forms/Select';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog.size);
  }, [props.dog.size]);

  function changeValue(value) {
    setValue(value);
    props.updateDog({ ...props.dog, ...{ size: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Size:</Col>
      <Col xs={3}>
        <Select
          defaultValue={getValue}
          onChange={e => changeValue(e.target.value)}
          options={
            <>
              <option>Please select</option>
              <option>Toy</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </>
          }
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Name;
