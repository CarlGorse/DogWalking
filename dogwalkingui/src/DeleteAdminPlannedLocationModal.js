import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeletePlannedLocationModal(props) {
  
  const [getShow, setShow] = useState(null);
  
  function HandleYes() {
    setShow(false);
    props.deleteRecordHandler2();
  };

  function HandleNo() {
    setShow(false);
    props.deleteRecordHandler2()
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>

      <Modal
        show={getShow}
        onHide={HandleNo}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={HandleNo}>
            No
          </Button>
          <Button variant="primary" onClick={HandleYes}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletePlannedLocationModal;
