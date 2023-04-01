import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getName, setName] = useState('');

  useEffect(() => {
    setName(props.dog.name);
  }, []);

  function changeName(value) {
    setName(value);
    props.updateDog({ ...props.dog, ...{ name: getName } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Name:</Col>
      <Col xs={6}>
        <input
          type='textbox'
          style={{ width: "100%" }}
          value={getName}
          placeholder="Your dog's name"
          onChange={e => changeName(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Name;
