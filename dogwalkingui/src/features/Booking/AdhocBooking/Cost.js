
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function Cost(props) {

  return (

    <Container>
      <Row>
        <Col></Col>
        <Col xs={4}>Cost:</Col>
        <Col xs={4}>{props.booking.cost}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Cost;
