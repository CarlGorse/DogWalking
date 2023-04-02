import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getValue, setValue] = useState('');

  //props.updateDog({ ...props.dog, ...{ size: getValue } });

  useEffect(() => {
    //setValue(props.dog.size);
  }, []);

  function changeValue(value) {
    //setValue(value);
    props.updateDog({ ...props.dog, ...{ size: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Size:</Col>
      <Col xs={6}>
        <select
          //value={getValue}
          defaultValue='Please select'
          onChange={e => changeValue(e.target.value)}
        >
          <option>Please select</option>
          <option>Toy</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Name;
