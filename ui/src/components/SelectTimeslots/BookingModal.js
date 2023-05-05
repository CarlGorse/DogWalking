import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';

function BookingModal(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );
  console.log(props)
  return (
    <Modal show={getShow} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col col-auto>Location:</Col>
            <Col col-auto>{props.booking.location}</Col>
          </Row>
          <Row>
            <Col col-auto>Start time:</Col>
            <Col col-auto>{getTimeStringHoursAndMinutes(props.booking.startTime)}</Col>
          </Row>
          <Row>
            <Col col-auto>End time:</Col>
            <Col col-auto>{getTimeStringHoursAndMinutes(props.booking.endTime)}</Col>
          </Row>
          <Row>
            <Col col-auto>Duration:</Col>
            <Col col-auto>{props.booking.duration} mins</Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;
