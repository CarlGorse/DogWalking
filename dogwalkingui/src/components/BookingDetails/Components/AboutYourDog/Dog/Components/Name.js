import Col from 'react-bootstrap/Col';
import Input from 'components/Forms/Input';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function Name(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog.name);
  }, []);

  function changeValue(value) {
    setValue(value);
    props.updateDog({ ...props.dog, ...{ name: value } });
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>Name:</Col>
      <Col xs={9}>
        <Input
          value={getValue}
          placeholder="Your dog's name"
          onChange={e => changeValue(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Name;
