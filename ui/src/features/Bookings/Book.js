import BookingModal from 'components/Bookings/BookingModal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import Overlay from 'react-bootstrap/Overlay';
import React from 'react';
import Row from 'react-bootstrap/Row';
import SelectTimeslots from "components/Timeslots/SelectTimeslots";
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useState } from 'react';

function Book({ route, navigation }) {

  console.log(route?.params)

  const [getDate, setDate] = useState(window.localStorage.getItem("selectedDate") ?? new Date());
  const [getTimeslots, setTimeslots] = useState([]);
  const [getShowBookingModal, setShowBookingModal] = useState(false);
  const [getBooking, setBooking] = useState(null);

  let navigate = useNavigate();

  const onBook = () => {
    let path = `../inputBookingDetails`;
    let booking = createDraftBooking(getSelectedTimeslots(getTimeslots));
    window.localStorage.setItem("booking", JSON.stringify(booking));
    navigate(path);
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function setNewDate(date) {
    window.localStorage.setItem("selectedDate", date);
    setDate(date);
  }

  function handleOnSelectBookedTimeslot(timeslot) {
    setShowBookingModal(true);
    setBooking(timeslot.booking);
  }

  let bookingModal;

  if (getShowBookingModal) {
    bookingModal = <BookingModal booking={getBooking} show={getShowBookingModal} handleClose={() => setShowBookingModal(false)} />;
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
