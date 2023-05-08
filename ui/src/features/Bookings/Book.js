import BookingModal from 'components/Bookings/BookingModal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import React from 'react';
import Row from 'react-bootstrap/Row';
import SelectTimeslots from "components/Timeslots/SelectTimeslots";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

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
      <h3>Available timeslots</h3>

      <Container>

        {bookingModal}

        <Row className="pt-3" >
          <Col>
            <DatePicker date={new Date(getDate)} onSetDate={setNewDate} />
          </Col>
        </Row>

        <div className="pt-3">
          <SelectTimeslots
            date={getDate}
            onUpdateTimeslotsState={updateTimeslotsState}
            onBook={onBook}
            handleOnSelectBookedTimeslot={timeslot => handleOnSelectBookedTimeslot(timeslot)}
          />
        </div>

      </Container>
    </>
  )
}

export default Book;
