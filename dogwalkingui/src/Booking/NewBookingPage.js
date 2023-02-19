import BookingError from './BookingError';
import Button from 'react-bootstrap/Button';
import DatePicker from "../Shared/DatePicker";
import { selectTimeslots } from "./NewBookingPageLogic";
import TimeslotList from '../Timeslot/TimeslotList';
import { timeslotData } from '../Timeslot/Data';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

function NewBookingPage() {

  const [getCanBook, setCanBook] = useState(false);
  const [getSelectedTimeslots, setSelectedTimeslots] = useState([]);
  const [getShowError, setShowError] = useState({ result: true });

  var timeslots = useRef(timeslotData);

  const navigate = useNavigate();

  function book() {
    var booking = {
      date: getSelectedTimeslots[0].date,
      startTime: getSelectedTimeslots[0].startTime,
      endTime: getSelectedTimeslots[getSelectedTimeslots.length - 1].endTime,
      cost: '£16'
    };
    navigate('/bookingConfirmationDetails', { replace: false, state: { booking } });
  }

  function handleClose() {
    setShowError({ result: true });
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {

    timeslots.current = selectTimeslots(timeslots.current, actionedTimeslotid, isSelect);

    var selectedTimeSlots = timeslots.current.filter(timeslot => timeslot.isSelected);
    setSelectedTimeslots(selectedTimeSlots);
    setCanBook(selectedTimeSlots.length > 0);
  }

  return (
    <>
      <p>You can book a new session here.</p>

      <DatePicker />

      <BookingError show={!getShowError.result} message={getShowError.message} handleClose={handleClose}></BookingError>

      <Button variant='dark' onClick={book} disabled={!getCanBook}>Book</Button>

      <TimeslotList timeslots={timeslots.current} selecetdTimeslots={getSelectedTimeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />

    </>
  );
}

export default NewBookingPage;
