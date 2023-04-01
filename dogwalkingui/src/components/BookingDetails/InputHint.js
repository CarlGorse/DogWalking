import Badge from 'react-bootstrap/Badge';
import Overlay from 'react-bootstrap/Overlay';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

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