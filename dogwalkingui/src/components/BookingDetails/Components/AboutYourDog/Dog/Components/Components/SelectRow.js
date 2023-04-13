import Col from 'react-bootstrap/Col';
import InputHint from 'components/BookingDetails/Components/InputHint';
import Select from 'components/Forms/Select';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function SelectRow(props) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(props.baseProps.dog[props.propertyName] ?? '');
  }, [props.baseProps.dog, props.propertyName])

  function changeValue(value) {
    setValue(value);
    props.baseProps.dog[props.propertyName] = value;
    props.baseProps.updateDog(props.baseProps.dog);
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

export default SelectRow;
