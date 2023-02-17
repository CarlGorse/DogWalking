import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          You must select a single session, or an unbroken list of sessions.
          <Button variant="primary" onClick={HandleNo}>Ok</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookError;
