import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import { isLastTimeslotInSelection } from "functions/BookingLogic";
import Row from 'react-bootstrap/Row';
import Selector from 'components/Timeslots/Selector';
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useContext } from 'react';

function Timeslot({
  timeslot,
  handleOnChangeSelect,
  handleOnSelectBookedTimeslot,
  onBook,
  timeslots }
) {

  const { getSystemSettings } = useContext(SystemSettingsContext);

  let bookButton;
  if (getSystemSettings.status === 1 && timeslot.isSelected && isLastTimeslotInSelection(timeslot, timeslots)) {
    bookButton = <Button style={{ backgroundColor: "royalBlue" }} onClick={onBook}>book</Button>;
  }

  return (
    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnChangeSelect={isSelected => handleOnChangeSelect(timeslot.startTime, isSelected)}
          handleOnSelectBookedTimeslot={handleOnSelectBookedTimeslot}
          timeslot={timeslot}
          timeslots={timeslots}
          text={getTimeStringHoursAndMinutes(timeslot.startTime)}
        >
        </Selector>
        {bookButton}
      </Col>
    </Row >
  );
}

export default Timeslot;
