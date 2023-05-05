import BookingsDetails from './BookingDetails';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Selector from './Selector/Selector';

function Timeslot({ timeslot, handleOnSelectTimeslot }) {

  var bookingDetails;

  if (timeslot.hasBooking) {
    bookingDetails = <BookingsDetails
      timeslot={timeslot}
      isFirstTimeslotForBooking={isFirstTimeslotForBooking()}
    />
  }

  function isFirstTimeslotForBooking() {
    return timeslot.booking.startTime === timeslot.startTime;
  }

  return (

    <Row key={timeslot.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnClick={(isSelected) => handleOnSelectTimeslot(timeslot.id, isSelected)}
          timeslot={timeslot}
          text={timeslot.startTime + ' - ' + timeslot.endTime}>
        </Selector>
      </Col>
      <Col className="col-auto ps-1">
        {bookingDetails}
      </Col>
    </Row >

  );
}

export default Timeslot;