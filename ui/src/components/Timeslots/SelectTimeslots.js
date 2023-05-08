import { baseUrl as apiBaseUrl, get as apiGet } from 'features/Api/api.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { selectTimeslots } from "functions/BookingLogic";
import Row from 'react-bootstrap/Row';
import TimeslotList from './List';
import { useEffect, useState } from 'react';

function SelectTimeslots(props) {

  const [getTimeslots, setTimeslots] = useState([]);

  useEffect(() => {
    apiGet(
      {
        url: apiBaseUrl + "/timeslots/get?date=" + new Date(props.date).toISOString().split('T')[0],
        callback: (response => {
          setTimeslots(response.data);
        })
      }
    )
  }, [props.date]);

  function handleOnChangeSelectTimeslot(actionedTimeslotid, isSelect) {
    var timeslots = selectTimeslots(getTimeslots, actionedTimeslotid, isSelect);
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
    props.onUpdateTimeslotsState(getTimeslots);
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col>
          <TimeslotList
            timeslots={getTimeslots}
            handleOnChangeSelect={handleOnChangeSelectTimeslot}
            handleOnSelectBookedTimeslot={timeslot => props.handleOnSelectBookedTimeslot(timeslot)}
            onBook={props.onBook}
          />
        </Col>
      </Row>
    </Container >
  );
}

export default SelectTimeslots;
