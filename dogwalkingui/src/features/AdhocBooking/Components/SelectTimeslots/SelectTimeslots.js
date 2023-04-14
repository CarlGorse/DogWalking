import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { createBooking, getSelectedTimeslots, selectTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import Row from 'react-bootstrap/Row';
import TimeslotList from './TimeslotList/TimeslotList';
import { useEffect, useState } from 'react';

function SelectTimeslots(props) {

  const [getTimeslots, setTimeslots] = useState([]);

  useEffect(() => {
    setTimeslots(props.timeslots);
  }, [props.timeslots]);

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function book() {
    props.onBook(createBooking(getSelectedTimeslots(getTimeslots)));
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {
    updateTimeslotsState(selectTimeslots(getTimeslots, actionedTimeslotid, isSelect));
  }

  function onSetFilterDate(date) {
    setTimeslotFilter(date);
  }

  // Doesn't work as filter removes timeslots from parent state! probably need to "reload" timeslots data
  function setTimeslotFilter(thisFilterDate) {
    var filteredTimeslots = getTimeslots.filter(timeslot => timeslot.date = thisFilterDate.toLocaleDateString("en-GB"));
    updateTimeslotsState(filteredTimeslots);
  }

  function canBook() {
    var selectedTimeslots = getSelectedTimeslots(getTimeslots);
    return selectedTimeslots.length > 0
  }

  return (
    <Container>

      <Row>
        <Col>
          <DatePicker date={new Date()} onSetDate={onSetFilterDate} />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Button className="mt-2" variant='primary' onClick={book} disabled={!canBook()}>Book</Button>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col>
          <TimeslotList timeslots={getTimeslots} handleOnSelectTimeslot={handleOnSelectTimeslot} />
        </Col>
      </Row>
    </Container>
  );
}

export default SelectTimeslots;
