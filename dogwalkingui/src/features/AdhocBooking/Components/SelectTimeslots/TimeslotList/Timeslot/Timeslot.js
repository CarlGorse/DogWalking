import BookingsDetails from './BookingDetails';
import Col from 'react-bootstrap/Col';
import NoBookingsDetails from './NoBookingDetails';
import Row from 'react-bootstrap/Row';
import Selector from './Selector/Selector';

function Timeslot(props) {

  var bookingDetails;
  if (props.timeslot.hasBooking && isFirstTimeslotForBooking()) {
    bookingDetails = <BookingsDetails timeslot={props.timeslot} />
  }
  else {
    bookingDetails = <NoBookingsDetails />
  }

  function isFirstTimeslotForBooking() {
    return props.timeslot.booking.startTime === props.timeslot.startTime;
  }

  return (

    <Row key={props.id}>
      <Col className="col-auto pe-0">
        <Selector
          handleOnClick={(isSelected) => props.handleOnSelectTimeslot(props.timeslot.id, isSelected)}
          timeslot={props.timeslot}
          text={props.timeslot.startTime + ' - ' + props.timeslot.endTime}>
        </Selector>
      </Col>
      <Col className="col-auto ps-1">
        {bookingDetails}
      </Col>
    </Row >

  );
}

export default Timeslot;
