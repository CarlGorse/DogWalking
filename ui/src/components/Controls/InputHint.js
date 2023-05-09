import { Badge, OverlayTrigger, Popover } from 'react-bootstrap';
import React, { useState, useRef } from 'react';

function InputHint(props) {

  const [getShow, setShow] = useState(false);
  const target = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        {props.hint}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Badge pill size="sm" bg="info" ref={target} onClick={() => setShow(!getShow)}>
        i
      </Badge>
    </OverlayTrigger>
  );
}

export default InputHint;