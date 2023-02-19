import Button from 'react-bootstrap/Button';

function TimeslotSelector(props) {

  function handleClick() {
    if (props.timeslot.status === 'notBookable') {
      return;
    }
    props.handleOnClick(!props.timeslot.isSelected);
  };

  return (
    <Button
      style={{ width: '14rem', color: (props.timeslot.status === 'notBookable' ? 'white' : 'black') }}
      onClick={handleClick}
      variant={props.timeslot.status === 'notBookable' ? 'dark' : props.timeslot.isSelected ? 'primary' : props.timeslot.booking != undefined ? 'secondary' : 'light'}>
      {props.text}
    </Button>
  );
}

export default TimeslotSelector;
