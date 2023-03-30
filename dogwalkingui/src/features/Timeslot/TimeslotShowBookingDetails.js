import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function TimeslotShowBookingsDetails(props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        variant='info'
        aria-controls="example-collapse-text"
        aria-expanded={open}
        size='sm'
      >
        booking
      </Button>
      <Collapse in={open} style={{ backgroundColor: '#d0f5fb' }}>
        <Container>
          <Row>
            <Col xs={3}>Location:</Col>
            <Col xs={4}>{props.timeslot.booking.location}</Col>
          </Row>
          <Row>
            <Col xs={3}>Start time:</Col>
            <Col xs={4}>{props.timeslot.booking.startTime}</Col>
          </Row>
          <Row>
            <Col xs={3}>End time:</Col>
            <Col xs={4}>{props.timeslot.booking.endTime}</Col>
          </Row>
          <Row>
            <Col xs={3}>Duration:</Col>
            <Col xs={4}>{props.timeslot.booking.duration}</Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

export default TimeslotShowBookingsDetails;
