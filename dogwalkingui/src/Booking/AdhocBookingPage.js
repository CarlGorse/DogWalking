import Button from 'react-bootstrap/Button';
import DatePicker from "../Shared/DatePicker";
import { selectTimeslots } from "./AdhocBookingPageLogic";
import TimeslotList from '../Timeslot/TimeslotList';
import { timeslotData } from '../Timeslot/TimeslotData';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

function AdhocBookingPage() {

  const [getCanBook, setCanBook] = useState(false);
  const [getSelectedTimeslots, setSelectedTimeslots] = useState([]);

  const navigate = useNavigate();

  var timeslots = useRef(timeslotData);

  function book() {
    var booking = {
      date: getSelectedTimeslots[0].date,
      startTime: getSelectedTimeslots[0].startTime,
      endTime: getSelectedTimeslots[getSelectedTimeslots.length - 1].endTime,
      duration: 'mins',
      cost: '£16'
    };
    navigate('/bookingConfirmationDetails', { replace: false, state: { booking } });
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

      <Button variant='dark' onClick={book} disabled={!getCanBook}>Book</Button>

      <TimeslotList timeslots={timeslots.current} selecetdTimeslots={getSelectedTimeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />

    </>
  );
}

export default AdhocBookingPage;
