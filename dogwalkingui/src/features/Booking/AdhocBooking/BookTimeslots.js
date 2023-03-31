import Button from 'react-bootstrap/Button';
import DatePicker from "components/DateTimePickers/DatePicker";
import { createBooking, getSelectedTimeslots, selectTimeslots } from "../BookingLogic";
import TimeslotList from '../../Timeslot/TimeslotList';
import { useState } from 'react';

function BookTimeslots(props) {

  const [getCanBook, setCanBook] = useState(false);

  function book() {
    props.onBook(createBooking(getSelectedTimeslots(props.timeslots)));
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {
    props.onUpdateTimeslots(selectTimeslots(props.timeslots, actionedTimeslotid, isSelect));
    setCanBook(getSelectedTimeslots(props.timeslots).length > 0);
  }

  function onSetFilterDate(date) {
    setTimeslotFilter(date);
  }

  // Doesn't work as filter removes timeslots from parent state! probably need to "reload" timeslots data
  function setTimeslotFilter(thisFilterDate) {
    var filteredTimeslots = props.timeslots.filter(timeslot => timeslot.date == thisFilterDate.toLocaleDateString("en-GB"));
    props.onUpdateTimeslots(filteredTimeslots);
  }

  return (
    <>
      <p>Make an adhoc booking:</p>

      <DatePicker date={new Date()} onSetDate={onSetFilterDate} />

      <Button variant='dark' onClick={book} disabled={!getCanBook}>Book</Button>

      <TimeslotList timeslots={props.timeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />

    </>
  );
}

export default BookTimeslots;
