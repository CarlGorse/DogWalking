import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function ToggleButton(props) {

  const [isOn, setIsOn] = useState(props.isOn);

  return (
    <>
      <Form>
        <Form.Check onClick={() => setIsOn(!isOn)}
          type="switch"
          label={isOn ? props.onText : props.offText}
          checked={isOn}
        />
      </Form>
    </>
  );
}

export default ToggleButton;
