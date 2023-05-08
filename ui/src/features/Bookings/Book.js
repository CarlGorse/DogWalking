import BookingModal from 'components/Bookings/BookingModal';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import OffCanvasExample from "./OffCanvasExample";
import React from 'react';
import Row from 'react-bootstrap/Row';
import TimeslotList from "components/Timeslots/TimeslotList";
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Book() {

  const { getSystemSettings } = useContext(SystemSettingsContext);

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

  var systemOfflineWarning;
  if (getSystemSettings?.status !== 1) {
    systemOfflineWarning = <p style={{ color: "red", fontWeight: "bold" }}>The system administrator has taken bookings offline - no new bookings can be made until further notice.</p>
  }

  return (
    <>
      {/*
      <div id="message" style={{ backgroundColor: "white", color: "white", position: "fixed", width: "100%" }}>
        <Button variant="primary">Book</Button>
      </div>
  */}

      <h3>Available timeslots</h3>

      <Container>

        {bookingModal}

        {systemOfflineWarning}

        <Row className="pt-3" >
          <Col>
            <DatePicker date={new Date(getDate)} onSetDate={setNewDate} />
          </Col>
        </Row>

        <div className="pt-3">
          <TimeslotList
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
