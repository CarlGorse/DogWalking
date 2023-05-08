import Col from 'react-bootstrap/Col';
import InputHint from 'components/Controls/InputHint';
import Select from 'components/Controls/Select';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function SelectRow({ baseProps, propertyName, inputHint, label, options }) {

  const [getValue, setValue] = useState('');

  useEffect(() => {
    setValue(baseProps.dog[propertyName] ?? '');
  }, [baseProps.dog, propertyName])

  function changeValue(value) {
    setValue(value);
    baseProps.dog[propertyName] = value;
    baseProps.updateDog(baseProps.dog);
  }

  var inputHintComponent;
  if (inputHint?.length > 0) {
    inputHintComponent = <InputHint hint={inputHint} />;
  }

  return (
    <Row className="mt-1">
      <Col xs={3}>{label + ':'}{inputHintComponent}</Col>
      <Col xs={3}>
        <Select
          defaultValue={getValue}
          onChange={e => changeValue(e.target.value)}
          options={options}
        />
      </Col>
      <Col></Col>
    </Row>
  )
}

export default SelectRow;
