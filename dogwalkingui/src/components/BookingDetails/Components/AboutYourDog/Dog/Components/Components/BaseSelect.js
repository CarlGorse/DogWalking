import Col from 'react-bootstrap/Col';
import InputHint from 'components/BookingDetails/Components/InputHint';
import Select from 'components/Forms/Select';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function BaseSelect(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.dog[props.propertyName] ?? '');
  }, [props.dog, props.propertyName])

  function changeValue(value) {
    setValue(value);
    props.dog[props.propertyName] = value;
    props.updateDog(props.dog);
  }

  var inputHint;
  if (props.inputHint?.length > 0) {
    inputHint = <InputHint hint={props.inputHint} />;
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>{props.label + ':'}{inputHint}</Col>
      <Col xs={3}>
        <Select
          defaultValue={getValue}
          onChange={e => changeValue(e.target.value)}
          options={props.options}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default BaseSelect;
