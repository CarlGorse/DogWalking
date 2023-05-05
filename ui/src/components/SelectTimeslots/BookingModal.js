import BookingSummary from 'components/BookingSummary/BookingSummary';
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
        <BookingSummary booking={props.booking} />
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;
