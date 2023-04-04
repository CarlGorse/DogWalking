import BookingsDetails from './BookingDetails';
import Col from 'react-bootstrap/Col';
import NoBookingsDetails from './NoBookingDetails';
import Row from 'react-bootstrap/Row';
import Selector from './Selector/Selector';

function Timeslot(props) {

  var bookingDetails;
  if (hasBooking() && isFirstTimeslotForBooking()) {
    bookingDetails = <BookingsDetails timeslot={props.timeslot} />
  }
  else {
    bookingDetails = <NoBookingsDetails />
  }

  function hasBooking() {
    return props.timeslot.booking !== undefined;
  }

  function isFirstTimeslotForBooking() {
    return props.timeslot.booking.startTime === props.timeslot.startTime;
  }

  return (

    <Row key={props.id}>
      <Col>
        <Selector
          handleOnClick={(isSelected) => props.handleOnSelectTimeslot(props.timeslot.id, isSelected)}
          timeslot={props.timeslot}
          text={props.timeslot.startTime + ' - ' + props.timeslot.endTime}>
        </Selector>
        <span className="ps-0">
          {bookingDetails}
        </span>
      </Col>
    </Row >

  );
}

export default Timeslot;