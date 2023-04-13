import LogIn from './LogIn';
import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function LogInHint(props) {

  const [getShow, setShow] = useState(true);
  console.log(props);
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

        <div className="mt-2">
          <LogIn onLogIn={props.onLogIn} description='Log in to use your preferences'></LogIn >
        </div>

      </Toast.Body>
    </Toast >
  );
}

export default LogInHint;
