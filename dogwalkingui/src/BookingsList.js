import Booking from './Booking';

function BookingsList(props) {
  
  var selectedCount = 0;

  function handleOnClickBooking(id, isSelected) {     
    props.handleOnClickBooking(id, isSelected);
  };

  return (
    <>
        {props.bookings.map((booking) => (
          <Booking 
            id={booking.id} 
            date={booking.date} 
            startTime={booking.startTime} 
            endTime={booking.endTime} 
            duration={booking.duration} 
            isBooked={booking.isBooked} 
            handleOnClick={handleOnClickBooking}
        />
        ))}
    </>
);
}

export default BookingsList;
