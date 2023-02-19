import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';

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
        You booking is confirmed.
      </Modal.Body>
    </Modal>
  );
}

export default BookingConfirmationModal;
