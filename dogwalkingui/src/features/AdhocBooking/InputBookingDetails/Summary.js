import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Summary({ booking }) {

  return (

    <>
      <b>Booking</b>
      <Row>
        <Col xs={3}>Date:</Col>
        <Col xs={6}>{booking.date}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col xs={3}>Start time:</Col>
        <Col xs={6}>{booking.startTime}</Col>
      </Row>
      <Row>
        <Col xs={3}>End time:</Col>
        <Col xs={6}>{booking.endTime}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col xs={3}>Duration:</Col>
        <Col xs={6}>{booking.duration}</Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Summary;
