import BookingSummary from 'components/Bookings/BookingSummary';
import Modal from 'react-bootstrap/Modal';
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