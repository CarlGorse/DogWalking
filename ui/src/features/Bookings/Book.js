import BookingModal from 'components/Bookings/BookingModal';
import { Col, Container, Row } from 'react-bootstrap';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import React from 'react';
import TimeslotList from "components/Timeslots/TimeslotList";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Book() {

  const [getDate, setDate] = useState(window.sessionStorage.getItem("selectedDate") ?? new Date());
  const [getBookingToShow, setBookingToShow] = useState(JSON.parse(window.sessionStorage.getItem("bookingToShow")));
  const [getTimeslots, setTimeslots] = useState([]);

  let navigate = useNavigate();

  const onBook = () => {
    let path = `../inputBookingDetails`;
    let booking = createDraftBooking(getSelectedTimeslots(getTimeslots));
    window.sessionStorage.setItem("booking", JSON.stringify(booking));
    navigate(path);
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function setNewDate(date) {
    window.sessionStorage.setItem("selectedDate", date);
    setDate(date);
  }

  function handleOnSelectBookedTimeslot(timeslot) {
    setBookingToShow(timeslot.booking);
  }

  let bookingModal;

  if (getBookingToShow !== null) {
    bookingModal = <BookingModal
      booking={getBookingToShow}
      show={window.sessionStorage.getItem("bookingToShow")}
      handleClose={() => { window.sessionStorage.removeItem("bookingToShow"); setBookingToShow(null) }} />;
  }

  return (
    <>
      {/*
      <div id="message" style={{ backgroundColor: "white", color: "white", position: "fixed", width: "100%" }}>
        <Button variant="primary">Book</Button>
      </div>
  */}

      <Container className="fixed-top" style={{ top: "56px", backgroundColor: "white", height: "100px" }}>
        <h3 className="pt-3">Book</h3>
        <Row className="pt-3">
          <Col>
            <DatePicker date={new Date(getDate)} onSetDate={setNewDate} />
          </Col>
        </Row>
      </Container>

      <div style={{ paddingTop: "80px" }}>
        <TimeslotList
          date={getDate}
          onUpdateTimeslotsState={updateTimeslotsState}
          onBook={onBook}
          handleOnSelectBookedTimeslot={timeslot => handleOnSelectBookedTimeslot(timeslot)}
        />
        {bookingModal}
      </div>

    </>
  )
}

export default Book;
