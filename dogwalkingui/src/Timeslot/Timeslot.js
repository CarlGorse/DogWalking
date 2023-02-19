import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TimeslotSelector from './TimeslotSelector';
import TimeslotShowBookingDetails from './TimeslotShowBookingDetails';

function Timeslot(props) {

  function handleOnSelect(isSelected) {
    props.handleOnSelectTimeslot(props.timeslot.id, isSelected);
  };

  var bookingDetailsButton;
  if (props.timeslot.booking !== undefined && props.timeslot.booking.startTime === props.timeslot.startTime)
    bookingDetailsButton = <TimeslotShowBookingDetails
      show={props.timeslot.booking !== undefined && props.timeslot.booking.startTime === props.timeslot.startTime}
      timeslot={props.timeslot}
    />

  return (
    <Container>
      <Row key={props.id} className='h-10'>
        <Col xs={2}>
          <TimeslotSelector
            handleOnClick={handleOnSelect}
            timeslot={props.timeslot}
            text={props.timeslot.startTime + ' - ' + props.timeslot.endTime}>
          </TimeslotSelector>
        </Col>
        <Col xs={6}>
          {bookingDetailsButton}
        </Col>
      </Row>
    </Container>
  );
}

export default Timeslot;
