import BookingsDetails from 'components/Timeslot/BookingDetails';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TimeslotSelector from 'components/Timeslot/TimeslotSelector';

function Page(props) {

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
    <Container>
      <Row key={props.id} className='h-10'>
        <Col xs={2}>
          <TimeslotSelector
            handleOnClick={(isSelected) => props.handleOnSelectTimeslot(props.timeslot.id, isSelected)}
            timeslot={props.timeslot}
            text={props.timeslot.startTime + ' - ' + props.timeslot.endTime}>
          </TimeslotSelector>
        </Col>
        <Col xs={6}>
          {bookingDetails}
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
