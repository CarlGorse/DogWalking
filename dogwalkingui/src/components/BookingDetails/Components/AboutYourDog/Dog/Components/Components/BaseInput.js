import Col from 'react-bootstrap/Col';
import Input from 'components/Forms/Input';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function BaseInput(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog[props.propertyName] ?? '');
  }, [props.dog, props.propertyName])

  function changeValue(value) {
    setValue(value);
    props.dog[props.propertyName] = value;
    props.updateDog(props.dog);
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>{props.label + ':'}</Col>
      <Col xs={9}>
        <Input
          value={getValue}
          placeholder={props.placeholder}
          onChange={e => changeValue(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default BaseInput;
