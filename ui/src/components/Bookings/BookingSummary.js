import { Col, Row } from 'react-bootstrap';
import { getTimeStringHoursAndMinutes } from 'functions/DateTimeFunctions';

function BookingSummary({ booking }) {

  return (
    <>
      <Row>
        <Col xs={3}>Date:</Col>
        <Col>{new Date(booking.date).toLocaleDateString("en-GB")}</Col>
      </Row>
      <Row>
        <Col xs={3}>Start time:</Col>
        <Col>{getTimeStringHoursAndMinutes(booking.startTime)}</Col>
      </Row>
      <Row>
        <Col xs={3}>End time:</Col>
        <Col>{getTimeStringHoursAndMinutes(booking.endTime)}</Col>
      </Row>
      <Row>
        <Col xs={3}>Duration:</Col>
        <Col>{booking.duration} mins</Col>
      </Row>
    </>
  );
}

export default BookingSummary;
