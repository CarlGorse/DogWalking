import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from '../../../components/BookingDetails/AboutYourDog';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import LogIn from '../../../components/LogIn';
import Options from '../../../components/BookingDetails/Options';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import SelectService from '../../../components/BookingDetails/SelectService';

function ConfirmationDetails(props) {

  const [getShowLogIn, setShowLogIn] = useState(true);

  function handleCloseLogIn() {
    setShowLogIn(false);
  }

  function book() {
    props.onBookingMade(props.booking);
  }

  return (
    <>
      <LogIn show={getShowLogIn} handleClose={() => handleCloseLogIn()} description='Log in to use your preferences'></LogIn>

      <div style={{ border: '1px solid black' }}>
        <b>Booking</b>
        <Container>
          <Row>
            <Col>Date:</Col>
            <Col>{props.booking.date}</Col>
          </Row>
          <Row>
            <Col>Start time:</Col>
            <Col>{props.booking.startTime}</Col>
          </Row>
          <Row>
            <Col>End time:</Col>
            <Col>{props.booking.endTime}</Col>
          </Row>
          <Row>
            <Col>Duration:</Col>
            <Col>{props.booking.duration}</Col>
          </Row>
        </Container>
      </div>

      <SelectService />
      <AboutYou />
      <AboutYourDog />
      <Options />

      <Container>
        <Row>
          <Col>Cost:</Col>
          <Col>{props.booking.cost}</Col>
        </Row>
      </Container>

      {/*<Button onClick={() => setShowLogIn(true)}>Log In</Button>*/}
      <Button onClick={book}>Book</Button>
    </>
  );
}

export default ConfirmationDetails;
