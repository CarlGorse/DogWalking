import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';

function TimeslotDetailsModal(props) {
  const [getShow, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const hasBooking = props.timeslot.booking !== undefined;

  return (
    <>

      <Modal
        show={getShow}
        backdrop="static"
        onHide={() => props.handleHideDetails()}
        keyboard={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <Container>
            <Row>
              <Col>Status:</Col>
              <Col>{props.timeslot.status}</Col>
            </Row>
            <Row className={!hasBooking ? 'd-none' : ''}>
              <Col>Location:</Col>
              <Col>{props.timeslot.booking?.location}</Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TimeslotDetailsModal;
