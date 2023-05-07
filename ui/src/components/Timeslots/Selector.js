import Button from 'react-bootstrap/Button';
import { isFirstTimeslotInBooking, isFirstTimeslotInSelection } from "functions/BookingLogic";

function TimeslotSelector({ timeslot, text, handleOnChangeSelect, handleOnSelectBookedTimeslot, timeslots }) {

  function handleClick() {
    if (timeslot.status === 'notBookable') {
      return;
    }

    if (timeslot.isBooked) {
      handleOnChangeSelect(false);
      handleOnSelectBookedTimeslot();
      return;
    }

    handleOnChangeSelect(!timeslot.isSelected);
  };

  let variant =
    timeslot.isBooked && isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightCoral" :
      timeslot.isBooked && !isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightPink" :
        timeslot.isSelected && isFirstTimeslotInSelection(timeslot, timeslots) ? "royalBlue" :
          timeslot.isSelected && !isFirstTimeslotInSelection(timeslot, timeslots) ? "skyBlue" :
            timeslot.isBookable ? "white" :
              "grey";

  return (
    <Button
      style={{
        width: '14rem',
        color: (timeslot.status === 'notBookable' ? 'white' : 'black'),
        backgroundColor: variant,
        borderColor: variant
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default TimeslotSelector;
