import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function TimeslotSelector(props) {

  const [getIsSelected, setIsSelected] = useState(false);

  function handleClick() {
    if (!props.isBookable) {
      return;
    }
    props.handleOnClick(!getIsSelected);
    setIsSelected(!getIsSelected)
  };

  return (
    <Button
      style={{ width: '14rem' }}
      onClick={() => handleClick()}
      variant={!props.isBookable ? 'dark' : getIsSelected ? 'primary' : props.isBooked ? 'secondary' : 'light'}>
      {props.text}
    </Button>
  );
}

export default TimeslotSelector;
