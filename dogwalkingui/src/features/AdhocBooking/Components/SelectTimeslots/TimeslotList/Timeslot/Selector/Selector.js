import Button from 'react-bootstrap/Button';

function TimeslotSelector({ timeslot, text, handleOnClick }) {

  function handleClick() {
    if (timeslot.status === 'notBookable') {
      return;
    }
    handleOnClick(!timeslot.isSelected);
  };

  const notBookableVariant = 'secondary';
  const isSelecetdvariant = 'primary';
  const hasBookingvariant = 'outline-secondary';
  const isBookableVariant = 'light';

  let variant =
    timeslot.status === 'notBookable' ? notBookableVariant :
      timeslot.isSelected ? isSelecetdvariant :
        timeslot.hasBooking ? hasBookingvariant :
          isBookableVariant;

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
