import BookingSummary from 'components/Bookings/BookingSummary';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function BookingModal(props) {

  const [getShow, setShow] = useState(true);

  useEffect(
    () => setShow(props.show ?? true),
    [props.show]
  );

  return (
    <Modal show={getShow} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookingSummary booking={props.booking} />
      </Modal.Body>
    </Modal>
  );
}

export default BookingModal;
