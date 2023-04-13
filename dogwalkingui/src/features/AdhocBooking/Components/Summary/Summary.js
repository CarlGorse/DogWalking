import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Summary({ booking }) {

  return (

    <>
      <Row>
        <Col xs={2}>Date:</Col>
        <Col xs={6}>{booking.date}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col xs={2}>Start time:</Col>
        <Col xs={6}>{booking.startTime}</Col>
      </Row>
      <Row>
        <Col xs={2}>End time:</Col>
        <Col xs={6}>{booking.endTime}</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col xs={2}>Duration:</Col>
        <Col xs={6}>{booking.duration}</Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Summary;
