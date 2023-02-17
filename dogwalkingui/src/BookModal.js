import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BookModal(props) {
  
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
        onHide={HandleNo}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Confirm booking?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>

        <Row>
          <Col xs={3}>Session start</Col>
          <Col xs={1}>09:00</Col>
        </Row>

        <Row>
          <Col xs={3}>Session end</Col>
          <Col xs={1}>10:00</Col>
        </Row>

        <Row>
          <Col xs={3}>Cost</Col>
          <Col xs={1}>£16</Col>
        </Row>
      </Container>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={HandleYes}>Confirm</Button>
          <Button variant="secondary" onClick={HandleNo}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookModal;
