import { Col, Row } from 'react-bootstrap';
import Input from 'components/Controls/Input';
import { useEffect, useState } from 'react';

function InputRow({ baseProps, propertyName, label, placeholder }) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(baseProps.dog[propertyName] ?? '');
  }, [baseProps.dog, propertyName])

  function changeValue(value) {
    setValue(value);
    baseProps.dog[propertyName] = value;
    baseProps.updateDog(baseProps.dog);
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>{label + ':'}</Col>
      <Col xs={9}>
        <Input
          value={getValue}
          placeholder={placeholder}
          onChange={e => changeValue(e.target.value)}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default InputRow;
