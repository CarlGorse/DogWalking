import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import { isLastTimeslotInSelection } from "functions/BookingLogic";
import Row from 'react-bootstrap/Row';
import Selector from 'components/Timeslots/Selector';

function Timeslot({ timeslot, handleOnChangeSelect, handleOnSelectBookedTimeslot, onBook, timeslots }) {

  let bookButton;
  if (timeslot.isSelected && isLastTimeslotInSelection(timeslot, timeslots)) {
    bookButton = <Button style={{ backgroundColor: "royalBlue" }} onClick={onBook}>book</Button>;
  }

  return (
    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnChangeSelect={isSelected => handleOnChangeSelect(timeslot.id, isSelected)}
          handleOnSelectBookedTimeslot={handleOnSelectBookedTimeslot}
          timeslot={timeslot}
          timeslots={timeslots}
          text={getTimeStringHoursAndMinutes(timeslot.startTime)}>
        </Selector>
        {bookButton}
      </Col>
    </Row >
  );
}

export default Timeslot;
