import Modal from 'react-bootstrap/Modal';

function BookingConfirmationModal(props) {

  return (
    <Modal
      show={true}
      backdrop="static"
      onHide={props.handleClose}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You booking has been confirmed.
      </Modal.Body>
    </Modal>
  );
}

export default BookingConfirmationModal;
