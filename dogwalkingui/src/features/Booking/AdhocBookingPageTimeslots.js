import Button from 'react-bootstrap/Button';
import DatePicker from "../../components/DatePicker";
import { selectTimeslots } from "./BookingLogic";
import TimeslotList from '../Timeslot/TimeslotList';
import { useState } from 'react';

function AdhocBookingPageTimeslots(props) {

  const [getCanBook, setCanBook] = useState(false);

  function book() {
    var selectedTimeslots = getSelectedTimeslots();
    var booking = {
      date: selectedTimeslots[0].date,
      startTime: selectedTimeslots[0].startTime,
      endTime: selectedTimeslots[selectedTimeslots.length - 1].endTime,
      duration: (selectedTimeslots.length * 15) + ' mins',
      cost: '£16',
      timeslots: selectedTimeslots
    };

    props.onBook(booking);
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {
    var selectedTimeslots = selectTimeslots(props.timeslots, actionedTimeslotid, isSelect);
    setTimeslots(selectedTimeslots);

    var selectedTimeSlots = getSelectedTimeslots();
    setCanBook(selectedTimeSlots.length > 0);
  }

  function onSetDate(date) {
    setTimeslotFilter(date);
  }

  function getSelectedTimeslots() {
    return props.timeslots.filter(timeslot => timeslot.isSelected);
  }

  function setTimeslotFilter(thisFilterDate) {
    var filteredTimeslots = props.timeslots.filter(timeslot => timeslot.date == thisFilterDate.toLocaleDateString("en-GB"));
    setTimeslots(filteredTimeslots);
  }

  function setTimeslots(timeslots) {
    props.onUpdateTimeslots(timeslots);
  }

  let currentDate = new Date();

  return (
    <>
      <p>You can book a new session here.</p>

      <DatePicker date={currentDate} onSetDate={onSetDate} />

      <Button variant='dark' onClick={book} disabled={!getCanBook}>Book</Button>

      <TimeslotList timeslots={props.timeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />

    </>
  );
}

export default AdhocBookingPageTimeslots;
