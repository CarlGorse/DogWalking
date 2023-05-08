import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useEffect } from 'react';

function ToggleButton(props) {

  const [getIsOn, setIsOn] = useState(false);

  useEffect(
    () => { setIsOn(props.isOn) },
    [props.isOn]
  );

  function handleClick() {
    setIsOn(!getIsOn);
    props.onChange(!getIsOn);
  };

  return (
    <Form>
      <Form.Check onClick={handleClick}
        type="switch"
        onText={props.onText}
        offText={props.offText}
        checked={getIsOn}
      />
    </Form>
  );
}

export default ToggleButton;
