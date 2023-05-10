import { Button, Col, Row } from 'react-bootstrap';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';
import { isFirstTimeslotInBooking, isFirstTimeslotInSelection } from "functions/BookingLogic";
import { isLastTimeslotInSelection } from "functions/BookingLogic";
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

  function handleClick() {

    if (timeslot.status === 'notBookable') {
      return;
    }

    if (timeslot.isBooked) {
      handleOnChangeSelect(timeslot.startTime, false);
      handleOnSelectBookedTimeslot();
      return;
    }

    if (getSystemSettings.status === 1) {
      handleOnChangeSelect(timeslot.startTime, !timeslot.isSelected);
    }
  };

  let variant =
    timeslot.isBooked && isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightCoral" :
      timeslot.isBooked && !isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightPink" :
        timeslot.isSelected && isFirstTimeslotInSelection(timeslot, timeslots) ? "royalBlue" :
          timeslot.isSelected && !isFirstTimeslotInSelection(timeslot, timeslots) ? "skyBlue" :
            timeslot.isBookable ? "white" :
              "grey";

  return (
    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Button
          style={{
            width: '14rem',
            color: (timeslot.status === 'notBookable' ? 'white' : 'black'),
            backgroundColor: variant,
            borderColor: variant
          }}
          onClick={handleClick}
        >
          {getTimeStringHoursAndMinutes(timeslot.startTime)}
        </Button>

        {bookButton}
      </Col>
    </Row >
  );
}

export default Timeslot;
