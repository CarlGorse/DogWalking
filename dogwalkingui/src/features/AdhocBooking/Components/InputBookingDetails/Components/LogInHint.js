import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function LogInHint(props) {

  const [getShow, setShow] = useState(true);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Toast className="mt-5" show={getShow} onClose={() => setShow(false)}>
      <Toast.Header>
        <strong className="me-auto">Auto populate</strong>
      </Toast.Header>
      <Toast.Body>
        You can auto populate the booking details with your preferences if you log in.
        <Button className="ms-2" size="sm" variant="secondary" onClick={props.onClickLogIn}>Log in</Button>
      </Toast.Body>
    </Toast >
  );
}

export default LogInHint;
