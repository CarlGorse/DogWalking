import { baseUrl as apiBaseUrl, post as apiPost } from 'functions/api.js';
import BookingDetails from 'components/Bookings/BookingDetails';
import BookingSummary from 'components/Bookings/BookingSummary';
import { Button, Col, Container } from 'react-bootstrap';
import LogIn from './InputBookingDetails/LogIn';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import SummaryCost from './InputBookingDetails/SummaryCost';
import { useNavigate } from "react-router-dom";

function InputBookingDetails(props) {

  const setConfirmBookingEnabled = useState(false)[1];

  let navigate = useNavigate();

  let booking = JSON.parse(window.sessionStorage.getItem("booking"));

  function doConfirmBooking() {

    var createBookingDto = {
      Location: 1,
      Date: booking.date,
      TimeslotTimes: booking.timeslots.map(x => ({ startTime: x.startTime, endTime: x.endTime }))
    };

    apiPost(
      {
        url: apiBaseUrl + "/bookings/CreateBooking",
        payload: createBookingDto,
        callback: (response => {
          window.sessionStorage.setItem("bookingToShow", JSON.stringify(booking));
          navigate('../book');
        })
      }
    )
  }

  return (
    <Container className='mt-5'>
      <h3>Book</h3>

      <LogIn
        title="Auto-populate"
        message="You can auto populate the booking details with your preferences if you log in."
      />

      <div className="mt-5">
        <b>Booking</b>
        <BookingSummary booking={booking} />
      </div >

      <SummaryCost cost={booking.cost} />

      <div className="pt-5">
        <Button
          variant='primary'
          size='sm'
          onClick={() => doConfirmBooking()}
          //disabled={!getConfirmBookingEnabled}>
          disabled={false}>
          Confirm booking
        </Button>

        <Button
          variant='light'
          className="ms-2"
          size='sm'
          onClick={() => {
            window.sessionStorage.removeItem("bookingToShow");
            navigate('../book');
          }}>
          Cancel
        </Button>
      </div>

      <Row className="mt-3">
        <Col xs={9}>
          <BookingDetails onSetInputs={isComplete => setConfirmBookingEnabled(isComplete)} />
        </Col>
      </Row>

    </Container >
  );
}

export default InputBookingDetails;
