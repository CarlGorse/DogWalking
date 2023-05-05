import BookingDetails from 'components/BookingDetails/BookingDetails';
import BookingSummary from 'components/BookingSummary/BookingSummary';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cost from '../Summary/Cost';
import LogIn from './Components/LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function InputBookingDetails(props) {

  const setConfirmBookingEnabled = useState(false)[1];

  return (
    <>

      <LogIn
        title="Auto-populate"
        message="You can auto populate the booking details with your preferences if you log in."
      />

      <div className="mt-5">
        <b>Booking</b>
        <BookingSummary booking={props.booking} />
      </div >

      <Cost cost={props.booking.cost} />

      <div className="pt-5">
        <Button
          variant='primary'
          size='sm'
          onClick={() => props.confirmBooking(props.booking)}
          //disabled={!getConfirmBookingEnabled}>
          disabled={false}>
          Confirm booking
        </Button>

        <Button
          variant='light'
          className="ms-2"
          size='sm'
          onClick={() => props.onCancelBooking()}>
          Cancel
        </Button>
      </div>

      <Row className="mt-3">
        <Col xs={9}>
          <BookingDetails onSetInputs={isComplete => setConfirmBookingEnabled(isComplete)} />
        </Col>
      </Row>

    </>
  );
}

export default InputBookingDetails;
