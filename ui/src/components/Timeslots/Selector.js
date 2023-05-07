import Button from 'react-bootstrap/Button';
import { isFirstTimeslotInBooking, isFirstTimeslotInSelection, isLastTimeslotInSelection } from "functions/BookingLogic";

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

  let isFirstOrLastTimeslotInSelection = timeslot.isSelected &&
    (isFirstTimeslotInSelection(timeslot, timeslots)
      || isLastTimeslotInSelection(timeslot, timeslots))

  let variant =
    timeslot.isBooked && isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightCoral" :
      timeslot.isBooked && !isFirstTimeslotInBooking(timeslot, timeslot.booking) ? "lightPink" :
        timeslot.isSelected && isFirstOrLastTimeslotInSelection ? "royalBlue" :
          timeslot.isSelected && !isFirstOrLastTimeslotInSelection ? "skyBlue" :
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
