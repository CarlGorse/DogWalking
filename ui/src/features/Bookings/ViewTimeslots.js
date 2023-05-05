import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { createDraftBooking, getSelectedTimeslots } from "functions/BookingLogic";
import DatePicker from "components/DateTimePickers/DatePicker";
import Overlay from 'react-bootstrap/Overlay';
import Row from 'react-bootstrap/Row';
import SelectTimeslots from "components/Timeslots/SelectTimeslots";
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';

function Page() {

  const [getDate, setDate] = useState(window.localStorage.getItem("selectedDate") ?? new Date());
  const [getTimeslots, setTimeslots] = useState([]);

  let navigate = useNavigate();

  const onBook = () => {
    let path = `../bookTimeslots`;
    let booking = createDraftBooking(getSelectedTimeslots(getTimeslots));
    window.localStorage.setItem("booking", JSON.stringify(booking));
    navigate(path);
  }

  function updateTimeslotsState(timeslots) {
    setTimeslots(timeslots.slice()); // copy array for state to recognise any changes
  }

  function setNewDate(date) {
    window.localStorage.setItem("selectedDate", date);
    setDate(date);
  }

  return (
    <>
      <h3>Available timeslots</h3>

      <Container>

        <Row className="pt-3" >
          <Col>
            <DatePicker date={new Date(getDate)} onSetDate={setNewDate} />
          </Col>
        </Row>

        <div className="pt-3">
          <SelectTimeslots
            date={getDate}
            onUpdateTimeslotsState={updateTimeslotsState}
            onBook={onBook}
          />
        </div>

      </Container>
    </>
  )
}

export default Page;
