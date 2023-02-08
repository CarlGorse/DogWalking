import BookingsList from './BookingsList';
import BookingsSearchFilter from './BookingsSearchFilter';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';

function BookSessionPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p>You can book a new walk here, or change existing bookings.</p>

      <Button className="mb-2" variant="dark" size="sm" onClick={handleShow}>
        Search filter
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <BookingsSearchFilter />
        </Offcanvas.Body>
      </Offcanvas>
      <BookingsList />
    </>
  );
}

export default BookSessionPage;
