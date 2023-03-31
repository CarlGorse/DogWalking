import Button from 'react-bootstrap/Button';
import DatePicker from "components/DateTimePickers/DatePicker";
import { createBooking, getSelectedTimeslots, selectTimeslots } from "functions/BookingLogic";
import { timeslotData } from 'components/Data/TimeslotData';
import TimeslotList from 'components/Timeslot/TimeslotList';
import { useEffect, useState } from 'react';

function TimeslotsPage(props) {

  const [getCanBook, setCanBook] = useState(false);
  const [getTimeslots, setTimeslots] = useState([]);

  useEffect(() => {
    setTimeslots(timeslotData);
  }, []);

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function book() {
    props.onBook(createBooking(getSelectedTimeslots(getTimeslots)));
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {
    updateTimeslotsState(selectTimeslots(getTimeslots, actionedTimeslotid, isSelect));
    setCanBook(getSelectedTimeslots(props.timeslots).length > 0);
  }

  function onSetFilterDate(date) {
    setTimeslotFilter(date);
  }

  // Doesn't work as filter removes timeslots from parent state! probably need to "reload" timeslots data
  function setTimeslotFilter(thisFilterDate) {
    var filteredTimeslots = getTimeslots.filter(timeslot => timeslot.date == thisFilterDate.toLocaleDateString("en-GB"));
    updateTimeslotsState(filteredTimeslots);
  }

  return (
    <>
      <p>Make an adhoc booking:</p>

      <DatePicker date={new Date()} onSetDate={onSetFilterDate} />

      <Button className="mt-2" variant='primary' onClick={book} disabled={!getCanBook}>Book</Button>

      <div className="mt-2">
        <TimeslotList timeslots={props.timeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />
      </div>

    </>
  );
}

export default TimeslotsPage;
