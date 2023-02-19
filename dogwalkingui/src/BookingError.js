import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';

function BookingError(props) {

  const [getShow, setShow] = useState(null);

  function HandleClose() {
    props.handleClose();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Modal
      show={getShow}
      backdrop="static"
      keyboard={false}
      onHide={HandleClose}
    >
      <Modal.Header closeButton>Error</Modal.Header>
      <Modal.Body>
        {props.message}
      </Modal.Body>
    </Modal>
  );
}

export default BookingError;
