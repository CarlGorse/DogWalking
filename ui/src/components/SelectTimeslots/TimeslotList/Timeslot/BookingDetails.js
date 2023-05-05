import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function BookingsDetails({ timeslot, isFirstTimeslotForBooking }) {

  const [open, setOpen] = useState(false);

  let variant = isFirstTimeslotForBooking ? 'info' : 'outline-info';
  let borderRadius = isFirstTimeslotForBooking ? '0px 0px 0px 0px' : '0px';

  return (
    <>
      <Button
        style={{
          borderRadius: borderRadius,
          color: 'white'
        }}
        onClick={isFirstTimeslotForBooking ? () => setOpen(!open) : () => { }}
        variant={variant}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      //size='sm'
      >
        booking
      </Button >
      <Collapse in={open} style={{ backgroundColor: '#d0f5fb' }}>
        <Container>
          <Row>
            <Col col-auto>Location:</Col>
            <Col col-auto>{timeslot.booking.location}</Col>
          </Row>
          <Row>
            <Col col-auto>Start time:</Col>
            <Col col-auto>{timeslot.booking.startTime}</Col>
          </Row>
          <Row>
            <Col col-auto>End time:</Col>
            <Col col-auto>{timeslot.booking.endTime}</Col>
          </Row>
          <Row>
            <Col col-auto>Duration:</Col>
            <Col col-auto>{timeslot.booking.duration}</Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

export default BookingsDetails;
