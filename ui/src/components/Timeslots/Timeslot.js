import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { getSelectedTimeslots } from "functions/BookingLogic";
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import Row from 'react-bootstrap/Row';
import Selector from 'components/Timeslots/Selector';

function Timeslot({ timeslot, handleOnChangeSelect, handleOnSelectBookedTimeslot, onBook, timeslots }) {

  let bookButton;
  if (isSelectedAndFirst()) {
    bookButton = <Button onClick={onBook}>book</Button>;
  }

  function isSelectedAndFirst() {
    if (!timeslot.isSelected) {
      return false;
    }
    if (getSelectedTimeslots(timeslots)[0].startTime !== timeslot.startTime) {
      return false;
    }
    return true;
  }

  return (
    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnChangeSelect={isSelected => handleOnChangeSelect(timeslot.id, isSelected)}
          handleOnSelectBookedTimeslot={handleOnSelectBookedTimeslot}
          timeslot={timeslot}
          text={getTimeStringHoursAndMinutes(timeslot.startTime) + ' - ' + getTimeStringHoursAndMinutes(timeslot.endTime)}>
        </Selector>
        {bookButton}
      </Col>
    </Row >
  );
}

export default Timeslot;
