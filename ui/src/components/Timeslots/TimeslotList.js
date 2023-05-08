import { baseUrl as apiBaseUrl, get as apiGet } from 'functions/api.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { selectTimeslots } from "functions/BookingLogic";
import Row from 'react-bootstrap/Row';
import Timeslot from './Timeslot';
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
          {getTimeslots?.map((timeslot) => (
            <Timeslot
              key={timeslot.id}
              id={timeslot.id}
              timeslot={timeslot}
              handleOnChangeSelect={(id, isSelected) => handleOnChangeSelectTimeslot(id, isSelected)}
              handleOnSelectBookedTimeslot={() => props.handleOnSelectBookedTimeslot(timeslot)}
              onBook={props.onBook}
              timeslots={getTimeslots}
            />
          ))}
        </Col>
      </Row>
    </Container >
  );
}

export default SelectTimeslots;
