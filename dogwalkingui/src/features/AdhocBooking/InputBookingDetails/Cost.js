
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Cost(props) {

  return (

    <Container>
      <Row>
        <Col xs={3}>Cost:</Col>
        <Col xs={6}>{props.cost}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Cost;
