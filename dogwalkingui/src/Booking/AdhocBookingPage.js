import Button from 'react-bootstrap/Button';
import DatePicker from "../Shared/DatePicker";
import { selectTimeslots } from "./AdhocBookingPageLogic";
import TimeslotList from '../Timeslot/TimeslotList';
import { timeslotData } from '../Timeslot/TimeslotData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function AdhocBookingPage() {

  const [getCanBook, setCanBook] = useState(false);
  const [getTimeslots, setTimeslots] = useState([]);
  const [getRefreshTimeslots, setRefreshTimeslots] = useState([]);

  const navigate = useNavigate();

  var allTimeslots = useRef(timeslotData);

  useEffect(() => {
    setTimeslots(allTimeslots.current);
  }, allTimeslots.current);

  function book() {
    var selectedTimeSlots = getSelectedTimeslots();
    var booking = {
      date: selectedTimeSlots[0].date,
      startTime: selectedTimeSlots[0].startTime,
      endTime: selectedTimeSlots[selectedTimeSlots.length - 1].endTime,
      duration: 'mins',
      cost: '£16'
    };
    navigate('/bookingConfirmationDetails', { replace: false, state: { booking } });
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {

    allTimeslots.current = selectTimeslots(allTimeslots.current, actionedTimeslotid, isSelect);
    setTimeslots(allTimeslots.current);
    setRefreshTimeslots(new Date()); // don't know why this works and line above doesn't! react does only refresh if state value changes, but the line above should be changing it

    var selectedTimeSlots = getSelectedTimeslots();
    setCanBook(selectedTimeSlots.length > 0);
  }

  function onSetDate(date) {
    setTimeslotFilter(date);
  }

  function getSelectedTimeslots() {
    return allTimeslots.current.filter(timeslot => timeslot.isSelected);
  }

  function setTimeslotFilter(thisFilterDate) {
    setTimeslots(allTimeslots.current.filter(timeslot => timeslot.date == thisFilterDate.toLocaleDateString("en-GB")));
  }

  return (
    <>
      <p>You can book a new session here.</p>

      <DatePicker date={new Date(2023, 1, 18, 0, 0, 0)} onSetDate={onSetDate} />

      <Button variant='dark' onClick={book} disabled={!getCanBook}>Book</Button>

      <TimeslotList timeslots={getTimeslots} t={getRefreshTimeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />

    </>
  );
}

export default AdhocBookingPage;
