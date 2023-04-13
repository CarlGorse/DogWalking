import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Summary from './Summary/Summary';
import { useEffect, useState } from 'react';

function ConfirmationModal(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );

  return (
    <Alert className="fs-6" show={getShow} variant="dark" onClose={() => setShow(false)} dismissible>
      <h5>{props.title}</h5>
      <p>{props.message}</p>

      <h5>Your booking is confirmed:</h5>
      <div className="ms-5">
        <Summary booking={props.booking} />
      </div>

    </Alert >
  );
}

export default ConfirmationModal;
