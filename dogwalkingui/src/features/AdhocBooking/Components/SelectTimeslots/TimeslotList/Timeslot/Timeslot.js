import BookingsDetails from './BookingDetails';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Selector from './Selector/Selector';

function Timeslot(props) {

  var bookingDetails;
  if (hasBooking() && isFirstTimeslotForBooking()) {
    bookingDetails = <BookingsDetails timeslot={props.timeslot} />
  }

  function hasBooking() {
    return props.timeslot.booking !== undefined;
  }

  function isFirstTimeslotForBooking() {
    return props.timeslot.booking.startTime === props.timeslot.startTime;
  }

  return (

    <Row key={props.id} className='justify-content-center'>
      <Col xs={2}>
        <Selector
          handleOnClick={(isSelected) => props.handleOnSelectTimeslot(props.timeslot.id, isSelected)}
          timeslot={props.timeslot}
          text={props.timeslot.startTime + ' - ' + props.timeslot.endTime}>
        </Selector>
      </Col>
      <Col xs={6}>
        {bookingDetails}
      </Col>
    </Row>

  );
}

export default Timeslot;
