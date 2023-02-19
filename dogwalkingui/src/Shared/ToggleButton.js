import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function ToggleButton(props) {

  const [isOn, setIsOn] = useState(props.isOn);

  function handleClick() { setIsOn(!isOn) };

  return (
    <Form>
      <Form.Check onClick={handleClick}
        type="switch"
        label={isOn ? props.onText : props.offText}
        defaultChecked={isOn}
      />
    </Form>
  );
}

export default ToggleButton;
