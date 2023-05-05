import Button from 'react-bootstrap/Button';

function TimeslotSelector({ timeslot, text, handleOnChangeSelect, handleOnSelectBookedTimeslot }) {

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

  const notBookableVariant = 'secondary';
  const isSelectedvariant = 'primary';
  const isBookedvariant = 'info';
  const isBookableVariant = 'light';

  let variant =
    timeslot.isBooked ? isBookedvariant :
      timeslot.isSelected ? isSelectedvariant :
        timeslot.isBookable ? isBookableVariant :
          notBookableVariant;

  return (
    <Button
      style={{ width: '14rem', color: (timeslot.status === 'notBookable' ? 'white' : 'black') }}
      onClick={handleClick}
      variant={variant}>
      {text}
    </Button>
  );
}

export default TimeslotSelector;
