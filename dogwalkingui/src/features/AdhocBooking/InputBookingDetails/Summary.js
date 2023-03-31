import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Summary(booking) {

  return (

    <>
      <b>Booking</b>
      <Row>
        <Col></Col>
        <Col xs={4}>Date:</Col>
        <Col xs={4}>{booking.date}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Start time:</Col>
        <Col xs={4}>{booking.startTime}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>End time:</Col>
        <Col xs={4}>{booking.endTime}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={4}>Duration:</Col>
        <Col xs={4}>{booking.duration}</Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Summary;
