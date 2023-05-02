import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { selectTimeslots } from "functions/BookingLogic";
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
    props.updateTimeslotsState(getTimeslots);
  }

  function handleOnSelectTimeslot(actionedTimeslotid, isSelect) {
    updateTimeslotsState(selectTimeslots(getTimeslots, actionedTimeslotid, isSelect));
  }

  function onSetFilterDate(date) {
    props.onSetFilterDate(date);
  }

  return (
    <Container>

      <Row>
        <Col>
          <DatePicker date={props.date} onSetDate={onSetFilterDate} />
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
