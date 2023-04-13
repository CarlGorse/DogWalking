import Button from 'react-bootstrap/Button';

function TimeslotSelector(props) {

  function handleClick() {
    if (props.timeslot.status === 'notBookable') {
      return;
    }
    props.handleOnClick(!props.timeslot.isSelected);
  };

  const notBookableVariant = 'secondary';
  const isSelecetdvariant = 'primary';
  const hasBookingvariant = 'outline-secondary';
  const isBookableVariant = 'light';

  let variant =
    props.timeslot.status === 'notBookable' ? notBookableVariant :
      props.timeslot.isSelected ? isSelecetdvariant :
        props.timeslot.booking != undefined ? hasBookingvariant :
          isBookableVariant;

  return (
    <Button
      style={{ width: '14rem', color: (props.timeslot.status === 'notBookable' ? 'white' : 'black') }}
      onClick={handleClick}
      variant={variant}>
      {props.text}
    </Button>
  );
}

export default TimeslotSelector;
