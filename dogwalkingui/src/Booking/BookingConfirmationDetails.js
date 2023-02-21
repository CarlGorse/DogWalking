import BookingConfirmationModal from './BookingConfirmationModal';
import BookingDetails from '../Shared/BookingDetails';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogIn from '../Shared/LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate } from 'react-router-dom'

function BookingConfirmationDetails({ route, navigation }) {

  const [getShowLogIn, setShowLogIn] = useState(true);
  const [getShowModal, setShowModal] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state.booking;

  function handleCloseLogIn() {
    setShowLogIn(false);
  }

  function handleCloseModal() {
    navigate('/adhocBookingPage', { replace: false, state: { booking } });
  }

  function book() {
    setShowModal(true);
  }

  var bookingConfirmationModal;
  if (getShowModal) {
    bookingConfirmationModal = <BookingConfirmationModal show={getShowModal} handleClose={handleCloseModal}></BookingConfirmationModal>
  }

  return (
    <>
      <LogIn show={getShowLogIn} handleClose={() => handleCloseLogIn()} description='Log in to use your preferences'></LogIn>

      <div style={{ border: '1px solid black' }}>
        <b>Booking</b>
        <Container>
          <Row>
            <Col>Date:</Col>
            <Col>{booking.date}</Col>
          </Row>
          <Row>
            <Col>Start time:</Col>
            <Col>{booking.startTime}</Col>
          </Row>
          <Row>
            <Col>End time:</Col>
            <Col>{booking.endTime}</Col>
          </Row>
          <Row>
            <Col>Duration:</Col>
            <Col>{booking.duration}</Col>
          </Row>
        </Container>
      </div>

      <BookingDetails />

      <Container>
        <Row>
          <Col>Cost:</Col>
          <Col>{booking.cost}</Col>
        </Row>
      </Container>

      {bookingConfirmationModal}

      {/*<Button onClick={() => setShowLogIn(true)}>Log In</Button>*/}
      <Button onClick={book}>Book</Button>
    </>
  );
}

export default BookingConfirmationDetails;
