import Timeslot from './Timeslot';

function TimeslotList(props) {

  function handleOnSelectTimeslot(id, isSelected) {
    props.handleOnSelectTimeslot(id, isSelected);
  };

  return (
    <>
      {props.bookings.map((booking) => (
        <Timeslot
          style={{ width: '14rem' }}
          id={booking.id}
          key={booking.id}
          date={booking.date}
          startTime={booking.startTime}
          endTime={booking.endTime}
          duration={booking.duration}
          isBooked={booking.isBooked}
          isBookable={booking.isBookable}
          handleOnSelectTimeslot={handleOnSelectTimeslot}
        />
      ))}
    </>
  );
}

export default TimeslotList;
