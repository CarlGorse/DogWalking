import Alert from 'react-bootstrap/Alert';
import Summary from './Summary/Summary';
import { useEffect, useState } from 'react';

function ConfirmationModal(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );

  return (
    <Alert className="fs-6" show={getShow} variant="success" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Your booking is confirmed!</Alert.Heading>
      <div className="ms-3">
        <Summary booking={props.booking} />
      </div>

    </Alert >
  );
}

export default ConfirmationModal;
