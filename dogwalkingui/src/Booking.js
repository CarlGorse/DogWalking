import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Booking(props) {

  const [getIsSelected, setIsSelected] = useState(false);

  function handleClick() {
    if (!props.isBookable) {
      return;
    }
    props.handleOnClick(props.id, !getIsSelected);
    setIsSelected(!getIsSelected)
  };

  return (
    <>
      <div key={props.id} className='mt-1'>
        <Button
          key={props.id}
          style={{ width: '14rem' }}
          onClick={() => handleClick()}
          variant={!props.isBookable ? 'dark' : getIsSelected ? 'primary' : props.isBooked ? 'secondary' : 'light'}>
          {props.startTime} - {props.endTime} ({props.duration} mins)
        </Button>
      </div>
    </>
  );
}

export default Booking;
