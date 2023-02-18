import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';

function BookError(props) {

  const [getShow, setShow] = useState(null);

  function HandleYes() {
    props.handleClose();
  };

  function HandleNo() {
    props.handleClose();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>

      <Modal
        show={getShow}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          {props.message}
          <Button variant="primary" onClick={HandleNo}>Ok</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookError;
